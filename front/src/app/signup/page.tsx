"use client"

import { Button, Field, Fieldset, Input, Label, Legend } from "@headlessui/react";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
    firstName: string
    lastName: string
    account: string
    email: string
    password: string
}

export default function SignUp () {
    const {
        register,
        handleSubmit
    } = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-lg px-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
                        <Legend className="text-base/7 font-semibold text-white">Sign up</Legend>
                        <Field>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <Label className="text-sm/6 font-medium text-white">名</Label>
                                <Input
                                  id="firstName"
                                  {...register("firstName")}
                                  className={clsx(
                                    'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                  )}
                                />
                            </div>
                            <div className="flex-1">
                                <Label className="text-sm/6 font-medium text-white">姓</Label>
                                <Input
                                  id="lastName"
                                  {...register("lastName")}
                                  className={clsx(
                                    'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                  )}
                                />
                            </div>
                        </div>
                        </Field>
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">アカウント名</Label>
                            <Input
                              {...register("account")}
                              className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                              )}
                            />
                        </Field>
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">メールアドレス</Label>
                            <Input
                              {...register("email")}
                              className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                              )}
                            />
                        </Field>
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">パスワード</Label>
                            <Input
                              type="password"
                              {...register("password")}
                              className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                              )}
                            />
                        </Field>
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">確認用パスワード</Label>
                            <Input
                              type="password"
                              className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                              )}
                            />
                        </Field>
                        <Field>
                            <Button type="submit" className="w-full rounded bg-green-600 py-2 px-4 text-sm text-white data-[hover]:bg-green-500 data-[active]:bg-green-700">
                                Sign Up
                            </Button>
                        </Field>
                    </Fieldset>
                </form>
            </div>
        </div>
    )
}