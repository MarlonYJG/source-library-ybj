/*
 * @Author: Marlon
 * @Date: 2024-06-28 10:13:41
 * @Description: 
 */
import Template from './template/index';

import { PROJECT_INIT_DATA, QUOTATION_INIT_DATA } from './common/constant';
import { singleTableSyncStore, resourceSort, LogicalProcessing, LogicalAmount, getProjectCfg, getProjectNumberRuler, translateSheet } from './common/single-table';
import { PubGetRandomNumber, GetAllTableRange } from './common/public';
import { CombinationTypeBuild, CombinationType } from './common/combination-type';
import { formatterPrice, getShowCostPrice } from './common/parsing-quotation';
import { getTemplateClassType, getProjectNameField } from './common/parsing-template';
import { DEFINE_IDENTIFIER_MAP } from './common/identifier-template'
import { SetDataSource, SpreadLocked } from './common/sheetWorkBook';

import { spreadExportExcel, spreadExportPDF, spreadStyleLocked } from './parsing-library/public';
import { FieldBindPath, InitBindValueTop, LogicalTotalCalculationType, Render as ParsingRender, InitTotal } from './parsing-library/single-table';

import { MENU_DELETE } from './build-library/config';
import { menuTotal } from './build-library/menu';
import { Reset } from './build-library/public';
import { InsertTotal, RenderTotal, Render as BuildRender, InitSheet, updateCellValue, setProjectName } from './build-library/single-table';
import {
  Sort, DeleteProduct, HeadDelete, spreadPrint,
  spreadExportExcel as headSpreadExportExcel,
  spreadExportPDF as headSpreadExportPDF,
  zoom, FormComputedRowField, Repaint, FrozenHead, ShowCostPrice
} from './build-library/head';

export let store = null;
export let vue = null;

const YBJSourceLibrary = {
  install(Vue, options) {
    vue = Vue;
    store = options.store;
  }
}

export {
  PROJECT_INIT_DATA,
  MENU_DELETE,
  QUOTATION_INIT_DATA,
  DEFINE_IDENTIFIER_MAP,
  Template,
  getShowCostPrice,
  GetAllTableRange,
  ShowCostPrice,
  setProjectName,
  getProjectNameField,
  singleTableSyncStore,
  resourceSort,
  PubGetRandomNumber,
  LogicalProcessing,
  LogicalAmount,
  menuTotal,
  CombinationTypeBuild,
  CombinationType,
  formatterPrice,
  getProjectCfg,
  getProjectNumberRuler,
  SetDataSource,
  Reset,
  InsertTotal,
  RenderTotal,
  BuildRender,
  ParsingRender,
  InitSheet,
  updateCellValue,
  SpreadLocked,
  spreadExportExcel,
  spreadExportPDF,
  spreadStyleLocked,
  FieldBindPath,
  InitBindValueTop,
  LogicalTotalCalculationType,
  InitTotal,
  translateSheet,
  Sort,
  DeleteProduct,
  headSpreadExportExcel,
  headSpreadExportPDF,
  zoom,
  FormComputedRowField,
  Repaint,
  HeadDelete,
  spreadPrint,
  FrozenHead,
  getTemplateClassType
}

export default YBJSourceLibrary
