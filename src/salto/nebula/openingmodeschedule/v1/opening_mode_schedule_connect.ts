// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/openingmodeschedule/v1/opening_mode_schedule.proto (package salto.nebula.openingmodeschedule.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateOpeningModeScheduleRequest, DeleteOpeningModeScheduleRequest, GetOpeningModeScheduleRequest, ListOpeningModeSchedulesRequest, ListOpeningModeSchedulesResponse, OpeningModeSchedule, UpdateOpeningModeScheduleRequest } from "./opening_mode_schedule_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * An opening mode is a type of behavior which can be applied to a specific
 * access point or collection of access points. For example: Office or Toggle.
 * This service allows you to make a number of different opening modes switch
 * automatically and vary across different time periods.
 *
 * @generated from service salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService
 */
export const OpeningModeScheduleService = {
  typeName: "salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService",
  methods: {
    /**
     * Create an opening mode schedule
     *
     * Creates an opening mode schedule.
     *
     * @generated from rpc salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.CreateOpeningModeSchedule
     */
    createOpeningModeSchedule: {
      name: "CreateOpeningModeSchedule",
      I: CreateOpeningModeScheduleRequest,
      O: OpeningModeSchedule,
      kind: MethodKind.Unary,
    },
    /**
     * Get an opening mode schedule
     *
     * Gets an existing opening mode schedule.
     *
     * @generated from rpc salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.GetOpeningModeSchedule
     */
    getOpeningModeSchedule: {
      name: "GetOpeningModeSchedule",
      I: GetOpeningModeScheduleRequest,
      O: OpeningModeSchedule,
      kind: MethodKind.Unary,
    },
    /**
     * List opening mode schedules
     *
     * Returns a list of opening mode schedules that have been previously
     * created.
     *
     * @generated from rpc salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.ListOpeningModeSchedules
     */
    listOpeningModeSchedules: {
      name: "ListOpeningModeSchedules",
      I: ListOpeningModeSchedulesRequest,
      O: ListOpeningModeSchedulesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an opening mode schedule
     *
     * Updates an existing opening mode schedule.
     *
     * @generated from rpc salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.UpdateOpeningModeSchedule
     */
    updateOpeningModeSchedule: {
      name: "UpdateOpeningModeSchedule",
      I: UpdateOpeningModeScheduleRequest,
      O: OpeningModeSchedule,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an opening mode schedule
     *
     * Permanently deletes an opening mode schedule. This cannot be undone.
     *
     * @generated from rpc salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.DeleteOpeningModeSchedule
     */
    deleteOpeningModeSchedule: {
      name: "DeleteOpeningModeSchedule",
      I: DeleteOpeningModeScheduleRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;

