import {
  FcBusinessman,
  
  FcDepartment,
  FcTimeline,
  FcOvertime,
  FcManager,
  
  FcConferenceCall,
  
  FcLeave,
  
  FcFile,
  FcApprove,
  
  FcDisapprove,
  FcPodiumWithSpeaker,
  
  FcTodoList,
  FcFlowChart,
  FcPlanner,
  FcContacts,
  FcVoicePresentation,
  FcCustomerSupport,
  FcAnswers,
  FcDatabase,

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
import ApprovalMain from "../pages/Approvals/ApprovalMain";
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
import HrLeaveHistorymain from "../pages/HrLeaveHistory/HrLeaveHistorymain"
import ManagerLeavesToApproveMain from "../pages/ManagerLeavesToApprove/ManagerLeavesToApproveMain";
import EmployeeMasterForms from "../pages/AllEmployees/AllEmployeesComponents/editmyprofileroute";


  
  
 


export default [
  {
    component: MyProfileMain,
    path: "/",
    icon: <FcBusinessman />,
    title: "My Profile",
    permission: [
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
      Roles.manager
    ],
    exact: true,
  },
  {
    component: EmployeeMaster,
    path: "/employeeProfile",
    icon: <FcFile />,
    title: "Edit My Profile",
    permission: [
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
      Roles.manager
    ],
  },
  {
    component: OfferApprovalMain,
    path: "/offerApprovalMain",
    icon: <FcApprove />,
    title: "Offer Approvals",
    permission: [Roles.hradmin,],
  },
  {
    component: RejectedEmployeeMain,
    path: "/RejectedEmployeeMain",
    icon: <FcDisapprove />,
    title: "Rejected Onboards",
    permission: [
     
      Roles.hradmin
    ],
  },
  {
    component: Employee,
    path: "/allEmployees",
    icon: <FcConferenceCall />,
    title: "All Employees",
    permission: [Roles.hradmin],
  },
  {
    component: UserName,
    path: "/users",
    icon: <FcPodiumWithSpeaker />,
    title: "Users",
    permission: [Roles.hradmin],
  },
  {
    component: ModuleMain,
    path: "/modules",
    icon: <FcTodoList />,
    title: "Modules",
    permission: [Roles.hradmin],
  },
  {
    component: RolesMain,
    path: "/roles",
    icon: <FcFlowChart />,
    title: "Roles",
    permission: [Roles.hradmin],
  },
  {
    component: LeaveToApply,
    path: "/leaveApply",
    icon: <FcLeave />,
    title: "Leaves To Apply",
    permission: [
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
      Roles.manager
    ],
  },
  {
    component: LeaveToApprove,
    path: "/LeaveToApprove",
    icon: <FcOvertime />,
    title: "Leaves To Approve",
    permission: [
      
      Roles.hradmin
    ],
  },
  {
    component: HolidayManagementMain,
    path: "/holidayManagenent",
    icon: <FcPlanner />,
    title: "Holiday Management",
    permission: [Roles.hradmin],
  },
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
  // {
  //   component: EmployeeOnboardingFormMain,
  //   path: "/onboardingForm",
  //   icon: <FcReading />,
  //   title: "Onboarding Form",
  //   permission: [Roles.taa],
  // },
  
  {
    component: AdminAttendanceMain,
    path: "/AdminAttendanceMain",
    icon: <FcContacts />,
    title: "Admin Attendance",
    permission: [Roles.hradmin, Roles.hr],
  },
  {
    component: EmpAttendanceMain,
    path: "/empAttendance",
    icon: <FcVoicePresentation />,
    title: "Employee Attendance",
    permission: [Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
      Roles.manager],
  },
  {
    component: TaggedEmployeesMain,
    path: "/employeeTagged",
    icon: <FcCustomerSupport />,
    title: "Employees List",
    permission: [Roles.manager],
  },
  {
    component: ApprovalMain,
    path: "/Approvals",
    icon: <FcApprove />,
    title: "Approvals",
    permission: [Roles.taa],
  },
  
  
  
  {
    component: ManagerLeavesToApproveMain,
    path: "/managerLeavesToApprove",
    icon: <FcManager />,
    title: "Manager Leaves To Approve",
    permission: [
      
      Roles.manager
    ],
  },
  {
    component: ManagerLeaveHistory,
    path: "/managerleavehistory",
    icon: <FcOvertime />,
    title: "Manager Leave History",
    permission: [
     Roles.manager,
      
    ],
  },
  
  {
    component: HrLeaveHistorymain,
    path: "/HrLeaveHistory",
    icon: <FcAnswers />,
    title: "My Leave History ",
    permission: [
      Roles.hradmin
    ],
  },
  {
    component: LeaveHistoryMain,
    path: "/LeaveHistory",
    icon: <FcDatabase />,
    title: "Leave History",
    permission: [
     
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
      Roles.manager
      
    ],
  },
  {

    component: EmployeeMasterForms,

    path: "/editmyprofileroute",

   

    permission: [Roles.hradmin,Roles.taa],

  },
];
// testing purpose
