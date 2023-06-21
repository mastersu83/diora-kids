import classes from "./AdminPanel.module.scss";
import { AdminPanelForm, Button } from "@/components/commons";
import { getServerSession } from "next-auth";

const AdminPanel = async () => {
  const session = await getServerSession();

  return (
    <div className={classes.root}>
      <div className={classes.logOut__btn}>
        Пользователь: {session.user.name}
      </div>
      <div className={classes.logOut__btn}>
        <Button text="Выйти" logOut />
      </div>
      <AdminPanelForm />
    </div>
  );
};

export default AdminPanel;
