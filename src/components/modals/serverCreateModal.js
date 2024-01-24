"use client"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { useState, useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button"
const formSchema = z.object({
    name: z.string().min(1, { message: "Sever Name" }),
    imageUrl: z.string().min(1, {
        message: "Server image is required."
    })
});

export const ServerCreateModal = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: "",
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values/*: z.infer<typeof formSchema>*/) => {
        console.log(values);
    }
    if (!isClient) {
        return null;
    }
    return (
        <Dialog open>
            {/* <DialogTrigger asChild>
                <Button variant="outline">Share</Button>
            </DialogTrigger> */}
            <DialogContent className="bg-zinc-800 overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="flex justify-center text-2xl font-bold">Create Your Sever</DialogTitle>
                    <DialogDescription className="flex justify-center ">
                        Your Server where you and yor friends hang out.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div>
                            <div>
                                TODO
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Server Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input disabled={isLoading} placeholder="SERVER NAME" {...field}>
                                            </Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="px-6 py-4">
                            <Button type="submit" className="text-lg font-medium bg-purple-400 w-full rounded-sm" variant="primary" disabled={isLoading}>
                                Create Server
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}