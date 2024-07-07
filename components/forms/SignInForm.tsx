"use client";

import { Button } from "../ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input";
import { LinkHref } from "../ui/LinkHref";
import { Title } from "../ui/title";
import { fadeIn, openSection } from "@/constants/variants";
import { Eye } from "@/icons/eye";
import { EyeClose } from "@/icons/eyeClose";
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
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

export const SignInForm: React.FC<SignInFormProps> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      email: "",
      password: "",
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
          <div className="mb-10 relative">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="max-w-[328px] md:max-w-[384px] m-auto">
                  <FormLabel>
                    <motion.label
                      variants={fadeIn}
                      className={cn(
                        `text-[16px] font-goggleSans font-bold leading-[24px] tracking-[0.1px] mb-[4px]`,
                        form.formState.errors.email ? "text-error" : ""
                      )}
                    >
                      Password
                    </motion.label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={!openPassword ? "password" : "text"}
                      className={cn(`m-auto`, form.formState.errors.email && "border-errorInput focus:border-errorInput")}
                      disabled={loading}
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <span className="absolute top-[50%] right-[42px] md:right-[16px]" onClick={() => setOpenPassword(prev => !prev)}>
                    {!openPassword ? <Eye /> : <EyeClose />}
                  </span>
                  <FormMessage className="absolute -bottom-[21px] left-[18px] font-goggleSans font-normal text-sm text-error" />
                </FormItem>
              )}
            />
            <LinkHref className="w-full text-[14px] absolute -bottom-[24px] right-[37px] md:right-[7px] flex justify-end items-center" href="/forgot-password">
              Forgot password?
            </LinkHref>
          </div>
          <div className="w-full flex justify-center items-center mb-6">
            <Button disabled={loading} className="w-full max-w-[328px] md:max-w-[264px] h-[48px] uppercase" type="submit">
              Sign In
            </Button>
          </div>
          <div className="flex justify-center gap-x-3 items-center w-full max-w-[282px] m-auto">
            <span className="text-[16px] font-goggleSans font-normal leading-[24px] tracking-[0.15px]">Dont have an account?</span>
            <LinkHref className="text-[16px] font-goggleSans font-normal leading-[24px] tracking-[0.15px]" href="/">
              Start the Quiz
            </LinkHref>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};
