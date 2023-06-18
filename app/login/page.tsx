import classes from "./AdminLogin.module.scss";
import { AdminForm } from "@/components/commons";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className={classes.admin}>
      <p className={classes.admin__title}>Войти в панель администратора</p>
      <AdminForm />
    </div>
  );
};

export default Page;
