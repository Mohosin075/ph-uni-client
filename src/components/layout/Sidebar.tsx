import { Button, Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPath } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.routes";
import { TSidebarItem } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/features/hook";
import { logOut, selectCurrentUser } from "../../redux/features/auth/authSlice";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const user_role = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const { Sider } = Layout;

function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  let sidebarItems: TSidebarItem[];

  switch (user!.role) {
    case user_role.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPath, user_role.ADMIN);
      break;
    case user_role.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPath, user_role.FACULTY);
      break;
    case user_role.STUDENT:
      sidebarItems = sidebarItemGenerator(studentPath, user_role.STUDENT);
      break;

    default:
      break;
  }

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Sider
      trigger={null}
      breakpoint="lg"
      collapsible
      onBreakpoint={(val) => setCollapsed(val)}
      collapsedWidth={0}
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical">
        <h1
          style={{
            color: "white",
            textTransform: "uppercase",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ph uni
        </h1>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button onClick={handleLogOut}>Log Out</Button>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Sider>
  );
}

export default Sidebar;
