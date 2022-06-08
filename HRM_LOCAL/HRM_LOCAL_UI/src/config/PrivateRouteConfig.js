import {
  FcBusinessman,
  FcSurvey,
  FcDataSheet,
  FcDepartment,
  FcTimeline,
  FcOvertime,
  FcManager,
  FcReading,
  FcSportsMode,
  FcCollaboration,
  FcConferenceCall,
  FcCalendar,
  FcLeave,
  FcMultipleInputs,
  FcNeutralTrading,
  FcAdvance,
  } from "react-icons/fc";
  
  
  
  //Data Imports
  import Roles from "./Roles";
  
  
  
  //Custom Component Imports
  import MyProfileMain from "../pages/MyProfile/MyProfileMain";
  import EmployeeMaster from "../pages/EmployeeMaster/EmployeeMasterMain";
  import HolidayManagementMain from "../pages/HolidayManagement/HolidayManagementMain";
  import EmployeeOnboardingFormMain from "../pages/EmployeeOnboardingForm/EmployeeOnboardingFormMain";
  import OfferApprovalMain from "../pages/OfferApprovals/OfferApprovalMain";
  import DepartmentMain from "../pages/Departments/DepartmentMain";
  import DesignationMain from "../pages/Designation/DesignationMain";
  import LeaveToApply from "../pages/LeaveManagement/LeaveToApply";
  import LeaveToApprove from "../pages/LeaveManagement/LeaveToApprove";
  import Employee from "../pages/AllEmployees/AllEmployeesMain";
  
  
  
  import AdminAttendanceMain from "../pages/AdminAttendance/AdminAttendanceMain";
  import LeaveHistoryMain from "../pages/LeaveHistory/LeaveHistoryMain";
  import RejectedEmployeeMain from "../pages/RejectedEmployee/RejectedEmployeeMain";
  import ModuleMain from "../pages/Administration/ModuleComponents/ModuleMain";
  import UserName from "../pages/Administration/Users/UserMain";
  import RolesMain from "../pages/Administration/Roles&Permissions/RolesMain";
  import EmpAttendanceMain from "../pages/EmployeeAttendance/EmpAttendanceMain";
  import TaggedEmployeesMain from "../pages/ManagerEmployeesList/TaggedEmployeesMain";
  import ManagerLeaveHistory from "../pages/ManagerLeaveHistory/ManagerLeaveHistoryMain";
  import ApprovalMain from "../pages/Approvals/ApprovalMain";
  
  
  
  
  
  export default [
  {
  component: MyProfileMain,
  path: "/",
  icon: <FcSportsMode />,
  title: "My Profile",
  permission: [
  Roles.employee,
  Roles.hr,
  Roles.ceo,
  Roles.it,
  Roles.taa,
  Roles.hradmin,
  Roles.manager,
  ],
  exact: true,
  },
  {
  component: EmployeeMaster,
  path: "/employeeProfile",
  icon: <FcManager />,
  title: "Edit My Profile",
  permission: [
  Roles.employee,
  Roles.hr,
  Roles.ceo,
  Roles.it,
  Roles.taa,
  Roles.hradmin,
  Roles.manager,
  ],
  },
  {
  component: Employee,
  path: "/allEmployees",
  icon: <FcManager />,
  title: "All Employees",
  permission: [Roles.hradmin],
  },
  {
  component: UserName,
  path: "/users",
  icon: <FcManager />,
  title: "Users",
  permission: [Roles.hradmin],
  },
  {
  component: ModuleMain,
  path: "/modules",
  icon: <FcManager />,
  title: "Modules",
  permission: [Roles.hradmin],
  },
  {
  component: RolesMain,
  path: "/roles",
  icon: <FcManager />,
  title: "Roles",
  permission: [Roles.hradmin],
  },
  {
  component: HolidayManagementMain,
  path: "/holidayManagenent",
  icon: <FcCalendar />,
  title: "Holiday Management",
  permission: [Roles.hradmin],
  },
  {
  component: ApprovalMain,
  path: "/onboarding",
  icon: <FcReading />,
  title: "Onboarding",
  permission: [Roles.taa],
  },
  {
  component: EmployeeOnboardingFormMain,
  path:"/onboardingForm",
  permission: []
  },
  {
  component: OfferApprovalMain,
  path: "/offerApprovalMain",
  icon: <FcNeutralTrading />,
  title: "Offer Approvals",
  permission: [Roles.hradmin, Roles.hr],
  },
  {
  component: AdminAttendanceMain,
  path: "/AdminAttendanceMain",
  icon: <FcNeutralTrading />,
  title: "Admin Attendance",
  permission: [Roles.hradmin, Roles.hr, Roles.taa],
  },
  {
  component: EmpAttendanceMain,
  path: "/empAttendance",
  icon: <FcNeutralTrading />,
  title: "Employee Attendance",
  permission: [Roles.employee],
  },
  {
  component: TaggedEmployeesMain,
  path: "/employeeTagged",
  icon: <FcNeutralTrading />,
  title: "Employees List",
  permission: [Roles.manager, Roles.hradmin],
  },
  // {
  // component: ApprovalMain,
  // path: "/Approvals",
  // icon: <FcCalendar />,
  // title: "Approvals",
  // permission: [Roles.taa],
  // },
  {
  component: DepartmentMain,
  path: "/departmentMain",
  icon: <FcDepartment />,
  title: "Departments",
  permission: [Roles.hradmin],
  },
  {
  component: DesignationMain,
  path: "/designationMain",
  icon: <FcTimeline />,
  title: "Designations",
  permission: [Roles.hradmin],
  },
  {
  component: LeaveToApply,
  path: "/leaveApply",
  icon: <FcManager />,
  title: "Leaves To Apply",
  permission: [
  Roles.employee,
  Roles.hr,
  Roles.ceo,
  Roles.it,
  Roles.taa,
  Roles.hradmin,
  ],
  },
  {
  component: LeaveToApprove,
  path: "/LeaveToApprove",
  icon: <FcManager />,
  title: "Leaves To Approve",
  permission: [Roles.manager, Roles.hradmin],
  },
  {
  component: ManagerLeaveHistory,
  path: "/leavehistory",
  icon: <FcManager />,
  title: "Leave History",
  permission: [Roles.manager],
  },
  {
  component: RejectedEmployeeMain,
  path: "/RejectedEmployeeMain",
  icon: <FcManager />,
  title: "Rejected Employees",
  permission: [Roles.manager, Roles.hradmin],
  },
  ];
  // testing purpose
  
  