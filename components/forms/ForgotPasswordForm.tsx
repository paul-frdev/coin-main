'use client'
import { Button } from "../ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input";
import { LinkHref } from "../ui/LinkHref";
import { Title } from "../ui/title";
import { fadeIn, openSection } from "@/constants/variants";
import { cn } from "@/lib/utils";
import { SignIn } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type SignInFormValues = z.infer<typeof formSchema>;

interface SignInFormProps {
  initialData?: SignIn | null;
}

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" })
});

export const ForgotPasswordForm: React.FC<SignInFormProps> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      email: ""
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    console.log(data);
  };

  return (
    <motion.div initial="initial" animate="animate" variants={openSection} className="flex flex-col justify-center items-center px-4 md:px-0">
      <Title variants={fadeIn} className="w-full max-w-[384px] text-center text-[26px] md:text-[32px] tracking-[0.5px] mb-9">
        Welcome Back
      </Title>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-[384px] max-h-[426px]">
          <div className="mb-6 relative">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="max-w-[328px] md:max-w-[384px] m-auto">
                  <FormLabel>
                    <motion.label
                      variants={fadeIn}
                      className={cn(
                        `text-[16px] max-w-[90%] font-goggleSans font-bold leading-[24px] tracking-[0.1px] mb-[4px]`,
                        form.formState.errors.email ? "text-error" : ""
                      )}
                    >
                      Email
                    </motion.label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(`m-auto`, form.formState.errors.email && "border-errorInput focus:border-errorInput")}
                      disabled={loading}
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute -bottom-[21px] left-[18px] font-goggleSans font-normal text-sm text-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex justify-center items-center mb-6">
            <Button disabled={loading} className="w-full max-w-[328px] md:max-w-[264px] h-[48px] uppercase" type="submit">
              Send reset code
            </Button>
          </div>
          <div className="flex justify-center gap-x-3 items-center w-full max-w-[282px] m-auto">
            <span className="text-[16px] font-goggleSans font-normal leading-[24px] tracking-[0.15px]">Return to</span>
            <LinkHref className="text-[16px] font-goggleSans font-normal leading-[24px] tracking-[0.15px]" href="/sign-in">
              Log In
            </LinkHref>
          </div>
        </form>
      </Form>
    </motion.div>
  )
}
