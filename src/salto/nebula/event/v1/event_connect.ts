// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/event/v1/event.proto (package salto.nebula.event.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Event, GetEventRequest, ListEventsRequest, ListEventsResponse } from "./event_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Events allow you to see activity, such as an access point opening, that is
 * taking place within an installation. This service is responsible for managing
 * event resources.
 *
 * @generated from service salto.nebula.event.v1.EventService
 */
export const EventService = {
  typeName: "salto.nebula.event.v1.EventService",
  methods: {
    /**
     * Get an event
     *
     * Gets an existing event.
     *
     * @generated from rpc salto.nebula.event.v1.EventService.GetEvent
     */
    getEvent: {
      name: "GetEvent",
      I: GetEventRequest,
      O: Event,
      kind: MethodKind.Unary,
    },
    /**
     * List events
     *
     * Returns a list of events that have been previously created.
     *
     * @generated from rpc salto.nebula.event.v1.EventService.ListEvents
     */
    listEvents: {
      name: "ListEvents",
      I: ListEventsRequest,
      O: ListEventsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

