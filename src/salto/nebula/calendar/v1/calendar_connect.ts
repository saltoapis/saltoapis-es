// @generated by protoc-gen-connect-es v1.0.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/calendar/v1/calendar.proto (package salto.nebula.calendar.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Calendar, CreateCalendarRequest, CreateEventRequest, DeleteCalendarRequest, DeleteEventRequest, Event, GetCalendarRequest, GetEventRequest, ListCalendarsRequest, ListCalendarsResponse, ListEventsRequest, ListEventsResponse, UpdateCalendarRequest, UpdateEventRequest } from "./calendar_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * The calendar functionality defines your organization's working calendar.
 * For example, you can define public holidays, company holidays and company
 * shutdowns. This service is responsible for managing calendar resources.
 *
 * @generated from service salto.nebula.calendar.v1.CalendarService
 */
export const CalendarService = {
  typeName: "salto.nebula.calendar.v1.CalendarService",
  methods: {
    /**
     * Create a calendar
     *
     * Creates a calendar.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.CreateCalendar
     */
    createCalendar: {
      name: "CreateCalendar",
      I: CreateCalendarRequest,
      O: Calendar,
      kind: MethodKind.Unary,
    },
    /**
     * Get a calendar
     *
     * Gets an existing calendar.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.GetCalendar
     */
    getCalendar: {
      name: "GetCalendar",
      I: GetCalendarRequest,
      O: Calendar,
      kind: MethodKind.Unary,
    },
    /**
     * List calendars
     *
     * Returns a list of calendars that have been previously created.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.ListCalendars
     */
    listCalendars: {
      name: "ListCalendars",
      I: ListCalendarsRequest,
      O: ListCalendarsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a calendar
     *
     * Updates an existing calendar.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.UpdateCalendar
     */
    updateCalendar: {
      name: "UpdateCalendar",
      I: UpdateCalendarRequest,
      O: Calendar,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a calendar
     *
     * Permanently deletes a calendar. This cannot be undone.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.DeleteCalendar
     */
    deleteCalendar: {
      name: "DeleteCalendar",
      I: DeleteCalendarRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Create a calendar event
     *
     * Creates a calendar event.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.CreateEvent
     */
    createEvent: {
      name: "CreateEvent",
      I: CreateEventRequest,
      O: Event,
      kind: MethodKind.Unary,
    },
    /**
     * Get a calendar event
     *
     * Gets an existing calendar event.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.GetEvent
     */
    getEvent: {
      name: "GetEvent",
      I: GetEventRequest,
      O: Event,
      kind: MethodKind.Unary,
    },
    /**
     * List calendar events
     *
     * Lists existing calendar events.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.ListEvents
     */
    listEvents: {
      name: "ListEvents",
      I: ListEventsRequest,
      O: ListEventsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a calendar event
     *
     * Updates an existing calendar event.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.UpdateEvent
     */
    updateEvent: {
      name: "UpdateEvent",
      I: UpdateEventRequest,
      O: Event,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a calendar event
     *
     * Permanently deletes a calendar event. This cannot be undone.
     *
     * @generated from rpc salto.nebula.calendar.v1.CalendarService.DeleteEvent
     */
    deleteEvent: {
      name: "DeleteEvent",
      I: DeleteEventRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;

