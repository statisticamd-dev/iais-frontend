import { createRouter, createWebHashHistory } from "vue-router";

import store from "@/store";
import { Role } from "@/common";

import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import Error from "@/views/error/Error";
import Unauthorized from "@/views/error/Unauthorized";
import Home from "@/views/Home";

const routes = [
  {
    path: "/login",
    component: Login,
    meta: { authorize: [] },
  },
  {
    path: "/register",
    component: Register,
    meta: { authorize: [] },
  },
  {
    path: "/error",
    component: Error,
    meta: { authorize: [] },
  },
  {
    path: "/unauthorized",
    component: Unauthorized,
    meta: { authorize: [] },
  },

  {
    path: "/",
    redirect: "/metadata",
    name: "Home",
    component: Home,
    meta: { authorize: [] },
    children: [
      {
        path: "metadata",
        name: "Metadata",
        component: () => import("@/views/metadata/Metadata"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential",
        name: "StatisticalProgramList",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalProgram/StatisticalProgramList"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/add",
        name: "StatisticalProgramAdd",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalProgram/StatisticalProgramAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/edit/:id",
        name: "StatisticalProgramEdit",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalProgram/StatisticalProgramEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/view/:id",
        name: "StatisticalProgramView",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalProgram/StatisticalProgramView"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/delete/:id",
        name: "StatisticalProgramDelete",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalProgram/StatisticalProgramDelete"
          ),
        meta: { authorize: [Role.Admin] },
      },
      {
        path: "metadata/referential/documentation/add",
        name: "ProcessDocumentationAdd",
        component: () =>
          import(
            "@/views/metadata/referential/processDocumentation/ProcessDocumentationAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/documentation/clone/:id",
        name: "ProcessDocumentationClone",
        component: () =>
          import(
            "@/views/metadata/referential/processDocumentation/ProcessDocumentationClone"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/documentation/view/:id",
        name: "ProcessDocumentationView",
        component: () =>
          import(
            "@/views/metadata/referential/processDocumentation/ProcessDocumentationView"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/documentation/edit/:id",
        name: "ProcessDocumentationEdit",
        component: () =>
          import(
            "@/views/metadata/referential/processDocumentation/edit/ProcessDocumentationEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/documentation/delete/:id",
        name: "ProcessDocumentationDelete",
        component: () =>
          import(
            "@/views/metadata/referential/processDocumentation/ProcessDocumentationDelete"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim",
        name: "ReferentialGsimConcepts",
        component: () => import("@/views/metadata/referential/GsimConcepts"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/agent",
        name: "AgentList",
        component: () => import("@/views/metadata/referential/agent/AgentList"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/agent/add",
        name: "AgentAdd",
        component: () => import("@/views/metadata/referential/agent/AgentAdd"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/agent/edit/:id",
        name: "AgentEdit",
        component: () => import("@/views/metadata/referential/agent/AgentEdit"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/agent/view/:id",
        name: "AgentView",
        component: () => import("@/views/metadata/referential/agent/AgentView"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/agent/delete/:id",
        name: "AgentDelete",
        component: () =>
          import("@/views/metadata/referential/agent/AgentDelete"),
        meta: { authorize: [Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/regulation",
        name: "LegislativeReferenceList",
        component: () =>
          import(
            "@/views/metadata/referential/legislativeReference/LegislativeReferenceList"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/regulation/add",
        name: "LegislativeReferenceAdd",
        component: () =>
          import(
            "@/views/metadata/referential/legislativeReference/LegislativeReferenceAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/regulation/edit/:id",
        name: "LegislativeReferenceEdit",
        component: () =>
          import(
            "@/views/metadata/referential/legislativeReference/LegislativeReferenceEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/regulation/view/:id",
        name: "LegislativeReferenceView",
        component: () =>
          import(
            "@/views/metadata/referential/legislativeReference/LegislativeReferenceView"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/regulation/delete/:id",
        name: "LegislativeReferenceDelete",
        component: () =>
          import(
            "@/views/metadata/referential/legislativeReference/LegislativeReferenceDelete"
          ),
        meta: { authorize: [Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/standard",
        name: "StatisticalStandardList",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalStandard/StatisticalStandardList"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/standard/add",
        name: "StatisticalStandardAdd",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalStandard/StatisticalStandardAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/standard/edit/:id",
        name: "StatisticalStandardEdit",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalStandard/StatisticalStandardEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/standard/view/:id",
        name: "StatisticalStandardView",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalStandard/StatisticalStandardView"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/standard/delete/:id",
        name: "StatisticalStandardDelete",
        component: () =>
          import(
            "@/views/metadata/referential/statisticalStandard/StatisticalStandardDelete"
          ),
        meta: { authorize: [Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/function",
        name: "BusinessFunctionList",
        component: () =>
          import(
            "@/views/metadata/referential/businessFunction/BusinessFunctionList"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/function/add",
        name: "BusinessFunctionAdd",
        component: () =>
          import(
            "@/views/metadata/referential/businessFunction/BusinessFunctionAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/function/edit/:id",
        name: "BusinessFunctionEdit",
        component: () =>
          import(
            "@/views/metadata/referential/businessFunction/BusinessFunctionEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/function/view/:id",
        name: "BusinessFunctionView",
        component: () =>
          import(
            "@/views/metadata/referential/businessFunction/BusinessFunctionView"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/function/delete/:id",
        name: "BusinessFunctionDelete",
        component: () =>
          import(
            "@/views/metadata/referential/businessFunction/BusinessFunctionDelete"
          ),
        meta: { authorize: [Role.Admin] },
      },

      {
        path: "metadata/referential/gsim/service",
        name: "BusinessServiceList",
        component: () =>
          import(
            "@/views/metadata/referential/businessService/BusinessServiceList"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/service/add",
        name: "BusinessServiceAdd",
        component: () =>
          import(
            "@/views/metadata/referential/businessService/BusinessServiceAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/service/edit/:id",
        name: "BusinessServiceEdit",
        component: () =>
          import(
            "@/views/metadata/referential/businessService/BusinessServiceEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/service/view/:id",
        name: "BusinessServiceView",
        component: () =>
          import(
            "@/views/metadata/referential/businessService/BusinessServiceView"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/service/delete/:id",
        name: "BusinessServiceDelete",
        component: () =>
          import(
            "@/views/metadata/referential/businessService/BusinessServiceDelete"
          ),
        meta: { authorize: [Role.Admin] },
      },

      {
        path: "metadata/referential/gsim/method",
        name: "ProcessMethodList",
        component: () =>
          import(
            "@/views/metadata/referential/processMethod/ProcessMethodList"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/method/add",
        name: "ProcessMethodAdd",
        component: () =>
          import("@/views/metadata/referential/processMethod/ProcessMethodAdd"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/method/edit/:id",
        name: "ProcessMethodEdit",
        component: () =>
          import(
            "@/views/metadata/referential/processMethod/ProcessMethodEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/referential/gsim/method/view/:id",
        name: "ProcessMethodView",
        component: () =>
          import(
            "@/views/metadata/referential/processMethod/ProcessMethodView"
          ),
        meta: { authorize: [] },
      },
      {
        path: "metadata/referential/gsim/method/delete/:id",
        name: "ProcessMethodDelete",
        component: () =>
          import(
            "@/views/metadata/referential/processMethod/ProcessMethodDelete"
          ),
        meta: { authorize: [Role.Admin] },
      },

      {
        path: "metadata/process",
        name: "Process",
        component: () => import("@/views/metadata/process/BusinessProcesses"),
        meta: { authorize: [] },
      },
      // ********** METADATA STRUCTURAL *************************************************
      {
        path: "metadata/structural",
        name: "StructuralComponents",
        component: () =>
          import("@/views/metadata/structural/StructuralComponents"),
        meta: { authorize: [] },
      },
      /* Variable */
      {
        path: "metadata/structural/variables/",
        name: "StructuralVariableList",
        component: () =>
          import("@/views/metadata/structural/variables/VariableList"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/structural/variables/add",
        name: "VariableAdd",
        component: () =>
          import("@/views/metadata/structural/variables/VariableAdd"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/structural/variables/view/:id",
        name: "VariableView",
        component: () =>
          import("@/views/metadata/structural/variables/VariableView"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/structural/variables/edit/:id",
        name: "VariableEdit",
        component: () =>
          import("@/views/metadata/structural/variables/VariableEdit"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/structural/variables/delete/:id",
        name: "VariableDelete",
        component: () =>
          import("@/views/metadata/structural/variables/VariableDelete"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //* Variable Representations View*/
      {
        path: "metadata/structural/variables/representations/view/:id",
        name: "VariableRepresentationsView",
        component: () =>
          import(
            "@/views/metadata/structural/variableRepresentations/VariableRepresentationsView"
          ),
        meta: { authorize: [] },
      },
      //* Statistical Classifications */
      {
        path: "metadata/structural/classifications/",
        name: "StructuralStatisticalClassificationsList",
        component: () =>
          import(
            "@/views/metadata/structural/statisticalClassifications/StatisticalClassificationsList"
          ),
        meta: { authorize: [] },
      },
      //Statistical Classifications View
      {
        path: "metadata/structural/classifications/view/:id",
        name: "StatisticalClassificationView",
        component: () =>
          import(
            "@/views/metadata/structural/statisticalClassifications/StatisticalClassificationView"
          ),
        meta: { authorize: [] },
      },
      //Statistical Classifications Add
      {
        path: "metadata/structural/classifications/add",
        name: "StatisticalClassificationAdd",
        component: () =>
          import(
            "@/views/metadata/structural/statisticalClassifications/StatisticalClassificationAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //Statistical Classifications Edit
      {
        path: "metadata/structural/classifications/edit/:id",
        name: "StatisticalClassificationEdit",
        component: () =>
          import(
            "@/views/metadata/structural/statisticalClassifications/StatisticalClassificationEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //Statistical Classifications Delete
      {
        path: "metadata/structural/classifications/delete/:id",
        name: "StatisticalClassificationDelete",
        component: () =>
          import(
            "@/views/metadata/structural/statisticalClassifications/StatisticalClassificationDelete"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //* Code Lists */
      {
        path: "metadata/structural/codelist/",
        name: "StructuralCodeList",
        component: () =>
          import("@/views/metadata/structural/codeList/CodeLists"),
        meta: { authorize: [] },
      },
      //CodeList Add
      {
        path: "metadata/structural/codelist/add",
        name: "CodeAdd",
        component: () =>
          import("@/views/metadata/structural/codeList/CodeListAdd"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //CodeList Edit
      {
        path: "metadata/structural/codelist/edit/:id",
        name: "CodeEdit",
        component: () =>
          import("@/views/metadata/structural/codeList/CodeListEdit"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //CodeList View
      {
        path: "metadata/structural/codelist/view/:id",
        name: "CodeView",
        component: () =>
          import("@/views/metadata/structural/codeList/CodeListView"),
        meta: { authorize: [] },
      },
      //Code List delete
      {
        path: "metadata/structural/codelist/delete/:id",
        name: "CodeDelete",
        component: () =>
          import("@/views/metadata/structural/codeList/CodeListDelete"),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // *Correspondence Tables
      // Correspondence Table List
      {
        path: "metadata/structural/correspondences/",
        name: "CorrespondenceTableList",
        component: () =>
          import(
            "@/views/metadata/structural/correspondenceTable/CorrespondenceTableList"
          ),
        meta: { authorize: [] },
      },
      // Correspondence Table View
      {
        path: "metadata/structural/correspondences/view/:id",
        name: "CorrespondenceTableView",
        component: () =>
          import(
            "@/views/metadata/structural/correspondenceTable/CorrespondenceTableView"
          ),
        meta: { authorize: [] },
      },
      // Correspondence Table Add
      {
        path: "metadata/structural/correspondences/add",
        name: "CorrespondenceTableAdd",
        component: () =>
          import(
            "@/views/metadata/structural/correspondenceTable/CorrespondenceTableAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // Correspondence Table edit
      {
        path: "metadata/structural/correspondences/edit/:id",
        name: "CorrespondenceTableEdit",
        component: () =>
          import(
            "@/views/metadata/structural/correspondenceTable/CorrespondenceTableEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // Correspondence Table delete
      {
        path: "metadata/structural/correspondences/delete/:id",
        name: "CorrespondenceTableDelete",
        component: () =>
          import(
            "@/views/metadata/structural/correspondenceTable/CorrespondenceTableDelete"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //Unit Types List
      {
        path: "metadata/structural/unitTypes/",
        name: "UnitTypeList",
        component: () =>
          import("@/views/metadata/structural/unitType/UnitTypeList"),
        meta: { authorize: [] },
      },
      // Unit Type view
      {
        path: "metadata/structural/unitTypes/view/:id",
        name: "UnitTypeView",
        component: () =>
          import("@/views/metadata/structural/unitType/UnitTypeView"),
        meta: { authorize: [] },
      },
      // Unit Type add
      {
        path: "metadata/structural/unitTypes/add/",
        name: "UnitTypeAdd",
        component: () =>
          import("@/views/metadata/structural/unitType/UnitTypeAdd"),
        meta: { authorize: [] },
      },
      // Unit Type edit
      {
        path: "metadata/structural/unitTypes/edit/:id",
        name: "UnitTypeEdit",
        component: () =>
          import("@/views/metadata/structural/unitType/UnitTypeEdit"),
        meta: { authorize: [] },
      },
      // Unit Type delete
      {
        path: "metadata/structural/unitTypes/delete/:id",
        name: "UnitTypeDelete",
        component: () =>
          import("@/views/metadata/structural/unitType/UnitTypeDelete"),
        meta: { authorize: [] },
      },
      //Concept Types List
      {
        path: "metadata/structural/concepts/",
        name: "ConceptList",
        component: () =>
          import("@/views/metadata/structural/concept/ConceptList"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/structural/concepts/view/",
        name: "ConceptView",
        component: () =>
          import("@/views/metadata/structural/concept/ConceptView"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/structural/concepts/add/",
        name: "ConceptAdd",
        component: () =>
          import("@/views/metadata/structural/concept/ConceptAdd"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/structural/concepts/edit/:id",
        name: "ConceptEdit",
        component: () =>
          import("@/views/metadata/structural/concept/ConceptEdit"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/structural/concepts/delete/:id",
        name: "ConceptDelete",
        component: () =>
          import("@/views/metadata/structural/concept/ConceptDelete"),
        meta: { authorize: [] },
      },

      {
        path: "metadata/structural/measurementUnits/",
        name: "MeasurementUnitList",
        component: () =>
          import(
            "@/views/metadata/structural/measurementUnits/MeasurementUnitList"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/structural/measurementUnits/add/",
        name: "MeasurementUnitAdd",
        component: () =>
          import(
            "@/views/metadata/structural/measurementUnits/MeasurementUnitAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/structural/measurementUnits/edit/:id",
        name: "MeasurementUnitEdit",
        component: () =>
          import(
            "@/views/metadata/structural/measurementUnits/MeasurementUnitEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/structural/measurementUnits/view/:id",
        name: "MeasurementUnitView",
        component: () =>
          import(
            "@/views/metadata/structural/measurementUnits/MeasurementUnitView"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      {
        path: "metadata/structural/measurementUnits/delete/:id",
        name: "MeasurementUnitDelete",
        component: () =>
          import(
            "@/views/metadata/structural/measurementUnits/MeasurementUnitDelete"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // Measurement type list
      {
        path: "metadata/structural/measurementTypes/",
        name: "MeasurementTypeList",
        component: () =>
          import(
            "@/views/metadata/structural/measurementTypes/MeasurementTypeList"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // Measurement type view
      {
        path: "metadata/structural/measurementTypes/view/:id",
        name: "MeasurementTypeView",
        component: () =>
          import(
            "@/views/metadata/structural/measurementTypes/MeasurementTypeView"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // Measurement type add
      {
        path: "metadata/structural/measurementTypes/add/",
        name: "MeasurementTypeAdd",
        component: () =>
          import(
            "@/views/metadata/structural/measurementTypes/MeasurementTypeAdd"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // Measurement type edit
      {
        path: "metadata/structural/measurementTypes/edit/:id",
        name: "MeasurementTypeEdit",
        component: () =>
          import(
            "@/views/metadata/structural/measurementTypes/MeasurementTypeEdit"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      // Measurement type delete
      {
        path: "metadata/structural/measurementTypes/delete/:id",
        name: "MeasurementTypeDelete",
        component: () =>
          import(
            "@/views/metadata/structural/measurementTypes/MeasurementTypeDelete"
          ),
        meta: { authorize: [Role.User, Role.Admin] },
      },
      //Dataset
      {
        path: "metadata/structural/unitDataSets/",
        name: "UnitDataSetList",
        component: () =>
          import("@/views/metadata/structural/unitDataSet/UnitDataSetList"),
        meta: { authorize: [] },
      },
      {
        path: "metadata/structural/unitDataSets/view/:id",
        name: "UnitDataSetView",
        component: () =>
          import("@/views/metadata/structural/unitDataSet/UnitDataSetView"),
        meta: { authorize: [] },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // redirect to unauthorized page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const userRole = store.getters["auth/role"];

  if (authorize.length) {
    if (!isAuthenticated || !authorize.includes(userRole)) {
      const err = {
        code: 401,
        message: "You cannot access this page!",
      };
      store.dispatch("error/unauthorized", err);
    }
  }

  next();
});

export default router;
