import { ReceiveEmailForm } from "@/components/forms/ReceiveEmailForm";
import { ReceiveEmailModal } from '@/components/modals/ReceiveEmailModal';
import React from "react";

const EnterEmailPage = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-9 px-4 md:px-0">
      <ReceiveEmailModal />
      <ReceiveEmailForm />
    </section>
  );
};

export default EnterEmailPage;
