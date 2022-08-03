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

import * as RiIcons from "react-icons/ri"
import { Accordion } from "react-bootstrap";
import ApprovesMain from "../pages/Approves/ApprovesMain";

export default [

  {
    component: MyProfileMain,
    path: "/",
    type:"myprofile",
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
      Roles.pmo,
      Roles.taahead,
      Roles.buhead,
    ],
    exact: true,
  },

  {
    component: ApprovesMain,
    path: "/approve",
    icon: <FcApproval />,
    title: "Approvals",
    type:"approvals",
    permission: [Roles.ceo, Roles.pmo,Roles.buhead,Roles.irm,Roles.srm],
  },

  {
    component: EmployeeMaster,
    path: "/employeeProfile",
    icon: <FcFile />,
    title: "Edit My Profile",
    type: "Employee",
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
      Roles.pmo,
      Roles.taahead,
      Roles.buhead,
    ],
    
     
  },
  {
    component: Employee,
    path: "/allEmployees",
    icon: <FcConferenceCall />,
    title: "All Employees",
    type:"Employee",
    permission: [Roles.pmo, Roles.ceo, Roles.buhead,Roles.irm,Roles.srm],
  },
  {
    component: ClientMain,
    path: "/ClientMain",
    type:"configuration",
    icon: <FcContacts />,
    title: "Clients",
    permission: [Roles.pmo],
  },
  {
    component: ProjectsMain,
    path: "/ProjectsMain",
    type:"configuration",
    icon: <FcOvertime />,
    title: "Projects",
    permission: [Roles.pmo],
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
    permission: [Roles.pmo],
  },
  
  {
    component: UserName,
    path: "/users",
    type:"configuration",
    icon: <FcPodiumWithSpeaker />,
    title: "Users",
    permission: [Roles.pmo],
  },
  {
    component: ModuleMain,
    path: "/modules",
    type:"configuration",
    icon: <FcTodoList />,
    title: "Modules",
    permission: [Roles.pmo],
  },  
  {
    component: RolesMain,
    path: "/roles",
    type:"configuration",
    icon: <FcFlowChart />,
    title: "Roles",
    permission: [Roles.pmo],
  },
 
  {
    component: HrLeavesToApproveMain,
    type: "Leaves",
    path: "/HrLeavesToApprove",
    icon: <FcOvertime />,
    title: "Leaves Waiting For Approval",
    permission: [Roles.hrmanager],
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
      Roles.pmo,
      Roles.taahead,
      Roles.buhead,
    ],
  },

  {
    component: HolidayManagementMain,
    path: "/holidayManagenent",
    type:"configuration",
    icon: <FcPlanner />,
    title: "Holiday Management",
    permission: [Roles.pmo],
  },
  {
    component: EmployeeTimeSheetMain,
    path: "/timeSheet",
    type:"null",
    icon: <FcPlanner />,
    title: "Timesheet",
    permission: [Roles.pmo,Roles.buhead,Roles.irm,Roles.srm],
  },
  {
    component: DepartmentMain,
    path: "/departmentMain",
    type:"configuration",
    icon: <FcDepartment />,
    title: "Departments",
    permission: [Roles.pmo],
  },
  {
    component: DesignationMain,
    path: "/designationMain",
    type:"configuration",
    icon: <FcTimeline />,
    title: "Designations",
    permission: [Roles.pmo],
  },
 
  {
    component: TaggedEmployeesMain,
    path: "/employeeTagged",
    type:"null",
    icon: <FcCustomerSupport />,
    title: "Reportee's List",
    permission: [Roles.manager],
  },
  {
    component: OnboardedEmployeesTable,
    type:"null",
    path: "/Approvals",
    icon: <FcApprove />,
    title: "Onboardings",
    permission: [Roles.taa],
  },

  {
    component: ManagerLeavesToApproveMain,
    type:"null",
    path: "/managerLeavesToApprove",
    icon: <FcManager />,
    title: "Leaves Waiting For Approval",
    permission: [Roles.manager],
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
    title: "Leave History ",
    permission: [Roles.hrmanager,Roles.irm,Roles.srm],
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
    ],
  },
  {
    component: EmployeeMasterForms,
    type:"null",
    path: "/editmyprofileroute",

    permission: [Roles.hrmanager, Roles.taa],
  },
  {
    component: createleaveTypeMain,

    path: "/CreateLeaves",
    type: "Leaves",
    icon: <FcManager />,

    title: "Leave Type",

    permission: [Roles.pmo],
  },
  {
    // added by Sri Divya

    component: EmploymentTypeMain,

    path: "/EmploymentType",
    type:"configuration",

    icon: <FcFinePrint />,

    title: "Employment Types ",

    permission: [Roles.pmo],
  },

  {
    // added by Sri Divya

    component: BandsMain,

    path: "/Bands",
    type:"configuration",

    icon: <FcBookmark />,

    title: "Bands ",

    permission: [Roles.pmo],
  },
  {
    component: TAAHeadMain,
    
      type:"null",
  
      path: "/TAAHead",
  
      icon: <FcManager />,
  
      title: "Approvals",
  
      permission: [Roles.taahead],
  
    
  },
  {
    component: BUHMain,
    
      type:"null",
  
      path: "/BUHead",
  
      icon: <FcManager />,
  
      title: "Approvals",
  
      permission: [Roles.buhead],
  
    
  },
  {

    component: PMOMain,

    type:"null",

    path: "/PMO",

    icon: <FcManager />,

    title: "Approvals",

    permission: [Roles.pmo],

  },

  {

    component: CEOMain,

    type:"null",

    path: "/CEO",

    icon: <FcManager />,

    title: "Approvals",

    permission: [Roles.ceo]

  },
];

// testing purpose
// kjh


