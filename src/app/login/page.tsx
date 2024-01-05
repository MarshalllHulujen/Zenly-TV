import { Button } from "../components/Button";

export default function LoginPage() {
  return (
      <Button as={"a"} href="/api/auth/login">
        Нэвтрэх
      </Button>
  );
}