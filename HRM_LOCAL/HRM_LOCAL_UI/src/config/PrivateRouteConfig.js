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
  FcFinePrint,
  FcReading,
  FcBookmark,
  FcApproval,
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

import AdminAttendanceMain from "../pages/AdminAttendance/AdminAttendanceMain";
import LeaveHistoryMain from "../pages/LeaveHistory/LeaveHistoryMain";
import RejectedEmployeeMain from "../pages/RejectedEmployee/RejectedEmployeeMain";
import ModuleMain from "../pages/Administration/ModuleComponents/ModuleMain";
import UserName from "../pages/Administration/Users/UserMain";
import RolesMain from "../pages/Administration/Roles&Permissions/RolesMain";
import EmpAttendanceMain from "../pages/EmployeeAttendance/EmpAttendanceMain";
import TaggedEmployeesMain from "../pages/ManagerEmployeesList/TaggedEmployeesMain";
import ManagerLeaveHistory from "../pages/ManagerLeaveHistory/ManagerLeaveHistoryMain";
import HrLeaveHistorymain from "../pages/HrLeaveHistory/HrLeaveHistorymain";
import ManagerLeavesToApproveMain from "../pages/ManagerLeavesToApprove/ManagerLeavesToApproveMain";
import EmployeeMasterForms from "../pages/AllEmployees/AllEmployeesComponents/editmyprofileroute";
import RejectedEmployees from "../pages/LeaveManagement/RejectedEmployees";
import createleaveTypeMain from "../pages/Createleave/CreateleaveMain";
import BandsMain from "../pages/Bands/BandsMain";
import EmploymentTypeMain from "../pages/EmploymentType/EmploymentTypeMain";
import IntegrateLeaveToApply from "../pages/LeaveManagement/IntegrateLeaveToApply";
import OnboardedEmployeesTable from "../pages/Approvals/ApprovalComponents/OnboardedEmployeesTable";
import ClientMain from "../pages/Client/ClientMain";
import ProjectsMain from "../pages/Projects/ProjectsMain";

import HrLeavesToApproveMain from "../pages/HrLeavesToApprove/HrLeavesToApproveMain";
import EmployeeTimeSheetMain from "../pages/TimeSheet/TimeSheetMain";

import TAAHeadMain from "../pages/TAAHead/TAAHeadMain";
import BUHMain from "../pages/BUHead/BUHMain";

import PMOMain from "../pages/PMO/PMOMain";

import CEOMain from "../pages/CEO/CEOMain";

import * as RiIcons from "react-icons/ri";
import { Accordion } from "react-bootstrap";
import ApprovesMain from "../pages/Approves/ApprovesMain";
import EmployeeList from "../pages/AllEmployees/AllEmployeesComponents/EmployeeList";
import Employee from "../pages/RoleUnderEmployees/RoleUnderEmployeesMain";
import AllEmployeesMain from "../pages/AllEmployees/AllEmployeesMain";

export default [
  {
    component: MyProfileMain,
    path: "/",
    type: "myprofile",
    icon: <FcBusinessman />,
    title: "My Profile",
    permission: [
      Roles.employee,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hrmanager,
      Roles.manager,
      Roles.recruitmentmanager,
      Roles.irm,
      Roles.srm,
      Roles.pmohead,
      Roles.taahead,
      Roles.buhead,
    ],
    exact: true,
  },

  // {
  //   component: ApprovesMain,
  //   path: "/approve",
  //   icon: <FcApproval />,
  //   title: "Approvals",
  //   type:"approvals",
  //   permission: [Roles.ceo, Roles.pmohead,Roles.buhead,Roles.irm,Roles.srm],
  // },

  {
    component: TAAHeadMain,
    type: "approvals",
    path: "/TAAHead",
    icon: <FcApproval />,
    title: "Approvals",
    permission: [Roles.taahead],
  },
  // {
  //   component: BUHMain,
  //   type: "approvals",
  //   path: "/BUHead",
  //   icon: <FcApproval />,
  //   title: "Approvals",
  //   permission: [Roles.buhead],
  // },
  {
    component: PMOMain,
    type: "approvals",
    path: "/PMO",
    icon: <FcApproval />,
    title: "Approvals",
    permission: [Roles.pmohead],
  },
  {
    component: CEOMain,
    type: "approvals",
    path: "/CEO",
    icon: <FcApproval />,
    title: "Approvals",
    permission: [Roles.ceo],
  },

  // {
  //   component: EmployeeMaster,
  //   path: "/employeeProfile",
  //   icon: <FcFile />,
  //   title: "Edit My Profile",
  //   type: "Employee",
  //   permission: [
  //     Roles.employee,
  //     Roles.ceo,
  //     Roles.it,
  //     Roles.taa,
  //     Roles.hrmanager,
  //     Roles.manager,
  //     Roles.recruitmentmanager,
  //     Roles.irm,
  //     Roles.srm,
  //     Roles.pmohead,
  //     Roles.taahead,
  //     Roles.buhead,
  //   ],
  // },
  {
    component: AllEmployeesMain,
    path: "/allEmployees",
    icon: <FcConferenceCall />,
    title: "All Employees",
    type: "Employee",
    permission: [Roles.pmohead, Roles.ceo],
  },
  {
    component: Employee,
    path: "/allEmployees",
    icon: <FcConferenceCall />,
    title: "All Employees",
    type: "Employee",
    permission: [Roles.buhead, Roles.irm, Roles.srm],
  },

  // {
  //   component: OfferApprovalMain,
  //   path: "/offerApprovalMain",
  //   type: "Employee",
  //   icon: <FcApprove />,
  //   title: "Offer Approvals",
  //   permission: [Roles.hradmin,Roles.recruitmentmanager],
  // },

  {
    component: RejectedEmployeeMain,
    path: "/RejectedEmployeeMain",
    type: "Employee",
    icon: <FcDisapprove />,
    title: "Rejected Onboards",
    permission: [Roles.pmohead],
  },

  {
    component: UserName,
    path: "/users",
    type: "configuration",
    icon: <FcPodiumWithSpeaker />,
    title: "Users",
    permission: [Roles.pmohead],
  },
  {
    component: ModuleMain,
    path: "/modules",
    type: "configuration",
    icon: <FcTodoList />,
    title: "Modules",
    permission: [Roles.pmohead],
  },
  {
    component: RolesMain,
    path: "/roles",
    type: "configuration",
    icon: <FcFlowChart />,
    title: "Roles",
    permission: [Roles.pmohead],
  },

  {
    component: HrLeavesToApproveMain,
    type: "approvals",
    path: "/HrLeavesToApprove",
    icon: <FcApproval />,
    title: "Approvals",
    permission: [Roles.srm],
  },

  {
    component: IntegrateLeaveToApply,
    type: "Leaves",
    path: "/IntegrateLeaveToApply",
    icon: <FcLeave />,
    title: "Leaves To Apply",
    permission: [
      Roles.employee,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hrmanager,
      Roles.manager,
      Roles.recruitmentmanager,
      Roles.irm,
      Roles.srm,
      Roles.pmohead,
      Roles.taahead,
      Roles.buhead,
    ],
  },

  {
    component: HolidayManagementMain,
    path: "/holidayManagenent",
    type: "configuration",
    icon: <FcPlanner />,
    title: "Holiday Management",
    permission: [Roles.pmohead],
  },
  {
    component: EmployeeTimeSheetMain,
    path: "/timeSheet",
    type: "Employee",
    icon: <FcPlanner />,
    title: "Timesheet",
    permission: [
      Roles.pmohead,
      Roles.buhead,
      Roles.irm,
      Roles.srm,
      Roles.employee,
      Roles.ceo,
      Roles.taa,
      Roles.taahead
    ],
  },
  {
    component: DepartmentMain,
    path: "/departmentMain",
    type: "configuration",
    icon: <FcDepartment />,
    title: "Departments",
    permission: [Roles.pmohead],
  },
  {
    component: DesignationMain,
    path: "/designationMain",
    type: "configuration",
    icon: <FcTimeline />,
    title: "Designations",
    permission: [Roles.pmohead],
  },

  {
    component: TaggedEmployeesMain,
    path: "/employeeTagged",
    type: "null",
    icon: <FcCustomerSupport />,
    title: "Reportee's List",
    permission: [Roles.manager],
  },
  {
    component: OnboardedEmployeesTable,
    type: "null",
    path: "/Approvals",
    icon: <FcApprove />,
    title: "Onboardings",
    permission: [Roles.taa],
  },

  {
    component: ManagerLeavesToApproveMain,
    type: "approvals",
    path: "/managerLeavesToApprove",
    icon: <FcApproval />,
    title: "Approvals",
    permission: [Roles.irm],
  },
  {
    component: RejectedEmployees,
    path: "/LeaveManagement",
    type: "Employee",
    icon: <FcOvertime />,
    title: "Leaves Rejected History",
    permission: [Roles.hrmanager],
  },

  {
    component: HrLeaveHistorymain,
    type: "Leaves",
    path: "/HrLeaveHistory",
    icon: <FcAnswers />,
    title: "Employee's Leave History ",
    // permission: [Roles.hrmanager,Roles.irm,Roles.srm],
    permission: [Roles.irm, Roles.srm],
  },
  {
    component: LeaveHistoryMain,
    type: "Leaves",
    path: "/LeaveHistory",
    icon: <FcDatabase />,
    title: "Leave History",
    permission: [
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hrmanager,
      Roles.manager,
      Roles.pmohead,
      Roles.taahead,
      Roles.buhead,
      Roles.recruitmentmanager,
      Roles.irm,
      Roles.srm
    ],
  },
  {
    component: EmployeeMasterForms,
    type: "null",
    path: "/editmyprofileroute",

    permission: [Roles.pmohead, Roles.ceo],
  },
  {
    component: createleaveTypeMain,

    path: "/CreateLeaves",
    type: "Leaves",
    icon: <FcManager />,

    title: "Leave Type",

    permission: [Roles.pmohead],
  },
  {
    // added by Sri Divya

    component: EmploymentTypeMain,

    path: "/EmploymentType",
    type: "configuration",

    icon: <FcFinePrint />,

    title: "Employment Types ",

    permission: [Roles.pmohead],
  },

  {
    // added by Sri Divya

    component: BandsMain,

    path: "/Bands",
    type: "configuration",

    icon: <FcBookmark />,

    title: "Bands ",

    permission: [Roles.pmohead],
  },
  // {
  //   component: BUHMain,

  //     type:"null",

  //     path: "/BUHead",

  //     icon: <FcManager />,

  //     title: "Approvals",

  //     permission: [Roles.buhead],

  // },
];


