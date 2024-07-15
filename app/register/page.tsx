import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import '@mantine/core/styles.css';
import {
  Container,
  MantineProvider,
} from '@mantine/core'
import { signup } from './actions'

export default function AuthenticationTitle() {
  return (
    <MantineProvider>
      <Container size={420} my={40}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                 </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button className="w-full" formAction={signup}>
                Sign Up
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </MantineProvider>
  );
}
