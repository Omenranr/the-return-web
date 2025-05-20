"use client";

import { useState, useRef } from "react";
import { api } from "~/trpc/react";
import {
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid"; // needs `pnpm add @heroicons/react`
import clsx from "clsx";              // or remove and use ternaries

type Initial =
  | {
      prenomHrp: string | null;
      ageHrp: number | null;
      experienceHrp: number | null;
      presentationHrp: string | null;

      prenomRp: string | null;
      nomRp: string | null;
      ageRp: number | null;
      typeRp: string | null;
      backgroundRp: string | null;
    }
  | null;

  export default function BackgroundFormClient({
    initial,
  }: {
    initial: Initial;
  }) {
  const utils = api.useContext();

  const { data } = api.background.status.useQuery();
  const status = data?.status ?? "BACKGROUND_PENDING";

  /* state */
  const [locked, setLocked] = useState(Boolean(initial));
  const formRef = useRef<HTMLFormElement>(null);
  const [confirm, setConfirm] = useState<
    null | "overwrite" | "submit"
  >(null);

  /* mutation */
  const submit = api.background.submit.useMutation({
    onSuccess: () => {
      void utils.background.status.invalidate();
      setLocked(true);
    },
  });

  /* unlock handler */
  const handleUnlock = () => setConfirm("overwrite");

  const reallyUnlock = () => {
    setLocked(false);
    // clear form
    formRef.current?.reset();
    setConfirm(null);
  };

  /* submit handler */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setConfirm("submit");
  }

  function reallySubmit() {
    const fd = new FormData(formRef.current!);

    submit.mutate({
      prenomHrp: (fd.get("prenom_hrp") ?? "") as string,
      ageHrp: Number(fd.get("age_hrp")),
      experienceHrp: Number(fd.get("experience_hrp")),
      presentationHrp: (fd.get("presentation_hrp") ?? "") as string,
      prenomRp: (fd.get("prenom_rp") ?? "") as string,
      nomRp: (fd.get("nom_rp") ?? "") as string,
      ageRp: Number(fd.get("age_rp")),
      typeRp: (fd.get("type_rp") ?? "Légal") as "Légal" | "Illégal",
      backgroundRp: (fd.get("background_rp") ?? "") as string,
    });
    setConfirm(null);
  }

  /* helper for initial values */
  const v = (k: keyof NonNullable<Initial>) =>
    (initial?.[k] ?? "");

  /* ---------- JSX ---------- */
  return (
    <>
      {/* Lock icon */}
      <div className="flex justify-end mb-2">
        {status === "WHITELIST_PENDING" && (
            <div className="flex justify-end mb-2">
                <button
                onClick={locked ? handleUnlock : () => setLocked(true)}
                className="flex items-center gap-2 text-white hover:text-lime-300 cursor-pointer"
                title={locked ? "Déverrouiller" : "Verrouiller"}
                >
                {locked ? (
                    <>
                    <LockClosedIcon className="h-6 w-6" />
                    <span className="text-sm font-medium">Modifier</span>
                    </>
                ) : (
                    <>
                    <LockOpenIcon className="h-6 w-6" />
                    <span className="text-sm font-medium">Verrouiller</span>
                    </>
                )}
                </button>
            </div>
        )}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-12 rounded-lg bg-white/10 p-8 backdrop-blur-md"
      >
        {/* HRP */}
        <fieldset className="space-y-6" disabled={locked}>
          <legend className="mb-4 text-2xl font-bold tracking-wide">
            Informations&nbsp;HRP
          </legend>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="Prénom"
              name="prenom_hrp"
              defaultValue={v("prenomHrp")}
              locked={locked}
            />
            <Input
              label="Âge"
              type="number"
              name="age_hrp"
              min={0}
              max={99}
              defaultValue={v("ageHrp")}
              locked={locked}
            />
            <Input
              label="Expérience RP (heures)"
              type="number"
              name="experience_hrp"
              min={0}
              className="md:col-span-2"
              defaultValue={v("experienceHrp")}
              locked={locked}
            />
          </div>

          <Textarea
            label="Présentation"
            name="presentation_hrp"
            rows={5}
            defaultValue={v("presentationHrp")}
            locked={locked}
          />
        </fieldset>

        <hr className="border-white/20" />

        {/* RP */}
        <fieldset className="space-y-6" disabled={locked}>
          <legend className="mb-4 text-2xl font-bold tracking-wide">
            Informations&nbsp;RP
          </legend>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="Prénom"
              name="prenom_rp"
              defaultValue={v("prenomRp")}
              locked={locked}
            />
            <Input
              label="Nom"
              name="nom_rp"
              defaultValue={v("nomRp")}
              locked={locked}
            />
            <Input
              label="Âge"
              name="age_rp"
              type="number"
              min={0}
              max={99}
              defaultValue={v("ageRp")}
              locked={locked}
            />

            <label className="space-y-1">
              <span className="text-sm font-medium">Type&nbsp;RP</span>
              <select
                name="type_rp"
                defaultValue={v("typeRp") || "Légal"}
                disabled={locked}
                className={clsx(
                  "w-full rounded-md border border-white/20 bg-white/5 p-2 text-black focus:border-lime-400 focus:outline-none",
                  locked && "opacity-60"
                )}
              >
                <option value="Légal">Légal</option>
                <option value="Illégal">Illégal</option>
              </select>
            </label>
          </div>

          <Textarea
            label="Background RP"
            name="background_rp"
            rows={12}
            defaultValue={v("backgroundRp")}
            locked={locked}
          />
        </fieldset>

        {/* Submit */}
        {!locked && (
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submit.isPending}
              className="rounded-md bg-lime-500 px-6 py-2 font-semibold hover:bg-lime-400 disabled:opacity-60 cursor-pointer"
            >
              {submit.isPending ? "Envoi…" : "Envoyer"}
            </button>
          </div>
        )}
      </form>

      {/* ------------- Pop-ups ------------- */}
      {confirm && (
        <Modal
          onClose={() => setConfirm(null)}
          onConfirm={confirm === "overwrite" ? reallyUnlock : reallySubmit}
        >
          {confirm === "overwrite"
            ? "Êtes-vous sûr de vouloir écraser le background ? Les anciennes données seront perdues."
            : "Êtes-vous sûr que toutes les informations sont correctes ?"}
        </Modal>
      )}
    </>
  );
}

/* ---------- small helpers ---------- */

function Input({
  label,
  locked,
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  locked: boolean;
}) {
  return (
    <label className={clsx("space-y-1", className)}>
      <span className="text-sm font-medium">{label}</span>
      <input
        {...rest}
        className={clsx(
          "w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none",
          locked && "opacity-60"
        )}
        readOnly={locked}
      />
    </label>
  );
}

function Textarea({
  label,
  locked,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  locked: boolean;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">{label}</span>
      <textarea
        {...rest}
        className={clsx(
          "w-full rounded-md border border-white/20 bg-white/5 p-3 focus:border-lime-400 focus:outline-none",
          locked && "opacity-60"
        )}
        readOnly={locked}
      />
    </label>
  );
}

function Modal({
  children,
  onClose,
  onConfirm,
}: {
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90vw] max-w-md rounded-lg bg-[#110038] p-6 space-y-6"
      >
        <p className="text-sm leading-relaxed">{children}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-md bg-gray-600/40 px-4 py-2 text-sm hover:bg-gray-600/60 cursor-pointer"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="rounded-md bg-lime-500 px-4 py-2 text-sm font-semibold hover:bg-lime-400 cursor-pointer"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}
