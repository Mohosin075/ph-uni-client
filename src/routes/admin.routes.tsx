import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];

// export const adminSidebarItems = adminPath.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

// export const adminSidebarItems = adminPath.reduce(
//     (acc: TSidebarItem[], item) => {
//       if (item.path && item.name) {
//         acc.push({
//           key: item.name,
//           label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         });
//       }

//       if (item.children) {
//         acc.push({
//           key: item.name,
//           label: item.name,
//           children: item.children.map((child) => ({
//             key: child.name,
//             label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//           })),
//         });
//       }

//       return acc;
//     },
//     []
//   );

//! it's move to util function
// export const adminRoutes = adminPath.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

//! Hard coded admin route children
// export const adminPath = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard></AdminDashboard>,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent></CreateStudent>,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
// ];
