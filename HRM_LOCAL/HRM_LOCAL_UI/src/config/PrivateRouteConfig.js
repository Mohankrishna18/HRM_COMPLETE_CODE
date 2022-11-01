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
  FcTemplate,
  FcExpired,
  FcCollaboration,
  FcReadingEbook,
  FcSurvey,
  FcList,
  FcOrgUnit,
  FcBullish,
  FcClock,
  FcFeedIn,
  FcOk,
  FcAddColumn,
  FcComboChart,
} from "react-icons/fc";

import {MdReport} from "react-icons/md";

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
import ProjectUpdateTabs from "../pages/Projects/ProjectsComponents/ProjectUpdateTabs";


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
import ProjectDashboardMain from "../pages/ProjectDashboard/ProjectDashboardMain";
import LeadsMain from "../pages/Leads/LeadsMain";
import ClientMain from "../pages/Client/ClientMain";
import PmTaskCreation from "../pages/PmTaskCreation/PmTaskCreationMain";
import UserStorymain from "../pages/userstory/UserStorymain";
import MyTask from "../pages/Task/MyTaskComponents/MyTask";
import ProjectsMain from "../pages/Projects/ProjectsMain";
import HRConfirmationMain from "../pages/HRApproval/HRConfirmationMain";
import HrDashboard from "../pages/HrDashboard/HrDashboardMain";
import HrDashboardMain from "../pages/HrDashboard/HrDashboardMain";
import AddResignation from "../pages/Resignation/AddResignation";
import ResignationMain from "../pages/Resignation/ResignationMain";
import UserAccessMain from "../pages/UserAccess/UserAccessMain";

import RRMain from "../pages/Recruitment-Tracker/RRMain";
import PMORequisitionMain from '../pages/Recruitment-Tracker/PMORequisitionApprovals/PMORequisitionMain'
import BUHRequisitionMain from '../pages/Recruitment-Tracker/BUHeadRequisitionApprovals/BUHRequisitionMain'
import StepperForm from "../pages/Recruitment-Tracker/RecruitmentRequestComponents/StepperForm";
import PMO_Dashboard from "../pages/Recruitment-Tracker/RequisitionDashboard/PMO_Dashboard/PMO_Dashboard"
import EditEmployeeDetailsTabs from "../pages/EditEmployeeDetails/EditEmployeeDetailsTabs";
import EmployeeDashboard from '../pages/Recruitment-Tracker/RequisitionDashboard/EmployeeDashboard/EmployeeDashboard'
import ReportsMain from "../pages/Reports/ReportsMain";


export default [
  {
    component: ProjectDashboardMain,
    path: "/ProjectDashboardMain",
    type: "null",
    icon: <FcComboChart />,
    title: "Projects Overview",
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
    component: HrDashboardMain,

    path: "/dashboard",

    type: "myprofile",

    icon: <FcTemplate />,

    title: "Dashboard",

    permission: [Roles.hrmanager, Roles.pmohead, Roles.ceo],

    //exact: true
  },
  {
    component: UserAccessMain,
    path: "/UserAccess",
    type: "configuration",
    icon: <FcOvertime />,
    title: "User Access",
    permission: [Roles.pmohead],
  },
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

  {
    component: LeadsMain,
    path: "/leadsMain",
    type: "configuration",
    icon: <FcReadingEbook />,
    title: "Leads",
    permission: [
      Roles.pmohead,
      Roles.ceo,

      Roles.hrmanager,
    ],
  },
  {
    component: ClientMain,
    path: "/clientMain",
    type: "configuration",
    icon: <FcCollaboration />,
    title: "Clients",
    permission: [
      Roles.pmohead,
      Roles.irm,
      Roles.employee,

    ],
  },
  {
    component: PmTaskCreation,
    path: "/TaskMain",
    type: "projects",
    icon: <FcList />,
    title: "Assign Task",
    permission: [Roles.pmohead, Roles.manager, Roles.irm],
  },
  {
    component: ProjectUpdateTabs,
    path: "/projectUpdateTabs/:id",
    // type: "null",
  
    // icon: <FcApprove />,
    // //title: "Projects",
    permission: [Roles.pmohead, Roles.ceo, Roles.buhead, Roles.manager],
  },
  {
    component: ProjectUpdateTabs,
    path: "/projectUpdateTabs/:id",
    // type: "null",
  
    // icon: <FcApprove />,
    // //title: "Projects",
    permission: [Roles.pmohead, Roles.ceo, Roles.buhead, Roles.manager],
  },
  {
    component:ReportsMain,
    path: "/ReportsMain",
    type: "null",
    icon: <MdReport />,
    title: "Reports",
    permission: [Roles.pmohead,Roles.buhead,Roles.ceo,Roles.irm, Roles.srm],
  },
  {
    component: MyTask,
    path: "/MyTaskMain",
    type: "myprofile",
    icon: <FcSurvey />,
    title: "My Task",
    permission: [Roles.employee,
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
    Roles.buhead,],
  },
  {
    component: UserStorymain,
    path: "/Userstory",
    type: "null",
    icon: <FcOrgUnit />,
    title: "Userstory",

    permission: [
      Roles.irm,

      Roles.manager,
    ],
  },

  {
    component: ProjectsMain,
    path: "/Projects",
    type: "projects",
    icon: <FcBullish />,
    title: "Projects",

    permission: [Roles.pmohead, Roles.irm, Roles.manager],
  },


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

  // {
  //   component: RejectedEmployeeMain,
  //   path: "/RejectedEmployeeMain",
  //   type: "Employee",
  //   icon: <FcDisapprove />,
  //   title: "Rejected Onboards",
  //   permission: [Roles.pmohead],
  // },

  // {
  //   component: UserName,
  //   path: "/users",
  //   type: "configuration",
  //   icon: <FcPodiumWithSpeaker />,
  //   title: "Users",
  //   permission: [Roles.pmohead],
  // },
  // {
  //   component: ModuleMain,
  //   path: "/modules",
  //   type: "configuration",
  //   icon: <FcTodoList />,
  //   title: "Modules",
  //   permission: [Roles.pmohead],
  // },
  // {
  //   component: RolesMain,
  //   path: "/roles",
  //   type: "configuration",
  //   icon: <FcFlowChart />,
  //   title: "Roles",
  //   permission: [Roles.pmohead],
  // },

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
    type: "Employee",
    path: "/IntegrateLeaveToApply",
    icon: <FcLeave />,
    title: "Leaves/WFH To Apply",
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
    component: EditEmployeeDetailsTabs,
    path: "/approvals/editDetails/:id",
    title: "Onboardings",
    permission: [Roles.taa],
  },
  {
    component: EmployeeTimeSheetMain,
    path: "/timeSheet",
    type: "Employee",
    icon: <FcClock />,
    title: "Timesheet",
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
    component: DepartmentMain,
    path: "/departmentMain",
    type: "configuration",
    icon: <FcDepartment />,
    title: "Business Units",


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
    icon: <FcFeedIn />,
    title: "Onboardings",
    permission: [Roles.taa],
  },

  {
    component: ManagerLeavesToApproveMain,
    type: "approvals",
    path: "/managerLeavesToApprove",
    icon: <FcOk />,
    title: "Approvals",
    permission: [Roles.irm],
  },
  {
    component: RejectedEmployees,
    path: "/LeaveManagement",
    type: "Employee",
    icon: <FcDisapprove />,
    title: "Leaves Rejected History",
    permission: [Roles.hrmanager],
  },

  {
    component: ManagerLeaveHistory,
    type: "Employee",
    path: "/HrLeaveHistory",
    icon: <FcAnswers />,
    title: "My Team Leave History ",
    // permission: [Roles.hrmanager,Roles.irm,Roles.srm],
    permission: [Roles.irm, Roles.srm],
  },
  {
    component: LeaveHistoryMain,
    type: "Employee",
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
    type: "configuration",
    icon: <FcAddColumn />,

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
  {
    component: HRConfirmationMain,
    type: "approvals",
    path: "/HRApproval",
    icon: <FcApproval />,
    title: "Approvals",
    permission: [Roles.hrmanager],
  },

  {
    component: ResignationMain,
    path: "/resignation",
    type: "Employee",
    icon: <FcExpired />,
    title: "Resignation",
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

  // {
  //   component: reduxMain,
  //   path: "/reduxMain",
  //   type: "null",
  //   icon: <FcPlanner />,
  //   title: "Redux",
  //   permission: [
  //     Roles.employee,
  //     Roles.pmohead,
  //     Roles.hrmanager,
  //     Roles.manager,
  //     Roles.recruitmentmanager,
  //   ],
  // },

  {
    component: RRMain,
    type: "null",
    path: "/rrf",
    icon: <FcVoicePresentation />,
    title: "Requisition Request",
    permission: [Roles.manager, Roles.irm],
  },
  {
    component: PMO_Dashboard,
    path: "/PMO_Dashboard",
    type: "null",
    icon: <FcApproval />,
    title: "Requisition Dashboard",
    permission: [Roles.pmohead]
  },
  
  {

    component: EmployeeDashboard,

    path: "/Employee_Dashboard",

    type: "null",

    icon: <FcApproval/>,

    title: "Requisition Dashboard",

    permission: [Roles.employee]

  },
{
    component: PMORequisitionMain,
    path: "/PMORequisitionMain",
    type: "null",
    icon: <FcApproval />,
    title: "Requisition Approvals",
    permission: [Roles.pmohead],
  },

  {
    component: BUHRequisitionMain,
    path: "/BUHRequisitionMain",
    type: "null",
    icon: <FcApproval />,
    title: "Requisition Approvals",
    permission: [Roles.buhead]
  },

  {
    component: StepperForm,
    path: '/StepperForm',
    type: "AERF",
    permission: [Roles.irm],

  },

  {
    component: EmployeeDashboard,
    path: "/Employee_Dashboard",
    type: "null",
    icon: <FcApproval />,
    title: "Requisition Dashboard",
    permission: [Roles.irm]
  },



];


