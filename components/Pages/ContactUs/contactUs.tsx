'use client'
import * as Dialog from "@radix-ui/react-dialog";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import ContactUsPage from '@/components/Pages/ContactUs/page'

export default function contactUsPage() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Edit profile</Button>
            </Dialog.Trigger>

            <Dialog.Content className="max-w-[450px]">
                {/* <Dialog.Title>Edit profile</Dialog.Title>
		<Dialog.Description size="2" mb="4" className="">
			Make changes to your profile.
		</Dialog.Description>

		<Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Name
				</Text>
				<TextField.Root
					defaultValue="Freja Johnsen"
					placeholder="Enter your full name"
				/>
			</label>
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Email
				</Text>
				<TextField.Root
					defaultValue="freja@example.com"
					placeholder="Enter your email"
				/>
			</label>
		</Flex>

		<Flex gap="3" mt="4" justify="end">
			<Dialog.Close>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</Dialog.Close>
			<Dialog.Close>
				<Button>Save</Button>
			</Dialog.Close>
		</Flex> */}
            <ContactUsPage />
            </Dialog.Content>
        </Dialog.Root>
    )
}