// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/event/v1/types.proto (package salto.nebula.event.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { AccessPoint } from "@saltoapis/nebula-accesspoint-v1";
import { file_salto_nebula_accesspoint_v1_access_point } from "@saltoapis/nebula-accesspoint-v1";
import type { AccessRight } from "@saltoapis/nebula-accessright-v1";
import { file_salto_nebula_accessright_v1_access_right } from "@saltoapis/nebula-accessright-v1";
import type { EmergencyKey } from "@saltoapis/nebula-emergencykey-v1";
import { file_salto_nebula_emergencykey_v1_emergency_key } from "@saltoapis/nebula-emergencykey-v1";
import type { Unit } from "@saltoapis/nebula-unit-v1";
import { file_salto_nebula_unit_v1_unit } from "@saltoapis/nebula-unit-v1";
import type { AppKey, CardKey, User, WalletKey } from "@saltoapis/nebula-user-v1";
import { file_salto_nebula_user_v1_user } from "@saltoapis/nebula-user-v1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file salto/nebula/event/v1/types.proto.
 */
export const file_salto_nebula_event_v1_types: GenFile = /*@__PURE__*/
  fileDesc("CiFzYWx0by9uZWJ1bGEvZXZlbnQvdjEvdHlwZXMucHJvdG8SFXNhbHRvLm5lYnVsYS5ldmVudC52MSJUChJBY2Nlc3NQb2ludENyZWF0ZWQSPgoMYWNjZXNzX3BvaW50GAEgASgLMiguc2FsdG8ubmVidWxhLmFjY2Vzc3BvaW50LnYxLkFjY2Vzc1BvaW50IlQKEkFjY2Vzc1BvaW50VXBkYXRlZBI+CgxhY2Nlc3NfcG9pbnQYASABKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcG9pbnQudjEuQWNjZXNzUG9pbnQiVAoSQWNjZXNzUG9pbnREZWxldGVkEj4KDGFjY2Vzc19wb2ludBgBIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3Nwb2ludC52MS5BY2Nlc3NQb2ludCLSAQoTQWNjZXNzUG9pbnRVbmxvY2tlZBI+CgxhY2Nlc3NfcG9pbnQYASABKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcG9pbnQudjEuQWNjZXNzUG9pbnQSKAoEdXNlchgCIAEoCzIaLnNhbHRvLm5lYnVsYS51c2VyLnYxLlVzZXISQwoNZW1lcmdlbmN5X2tleRgDIAEoCzIqLnNhbHRvLm5lYnVsYS5lbWVyZ2VuY3lrZXkudjEuRW1lcmdlbmN5S2V5SABCDAoKY3JlZGVudGlhbCJ9ChFBY2Nlc3NQb2ludExvY2tlZBI+CgxhY2Nlc3NfcG9pbnQYASABKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcG9pbnQudjEuQWNjZXNzUG9pbnQSKAoEdXNlchgCIAEoCzIaLnNhbHRvLm5lYnVsYS51c2VyLnYxLlVzZXIiVwoVQWNjZXNzUG9pbnRGb3JjZWRPcGVuEj4KDGFjY2Vzc19wb2ludBgBIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3Nwb2ludC52MS5BY2Nlc3NQb2ludCJTChFBY2Nlc3NQb2ludENsb3NlZBI+CgxhY2Nlc3NfcG9pbnQYASABKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcG9pbnQudjEuQWNjZXNzUG9pbnQieAoMQWNjZXNzRGVuaWVkEj4KDGFjY2Vzc19wb2ludBgBIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3Nwb2ludC52MS5BY2Nlc3NQb2ludBIoCgR1c2VyGAIgASgLMhouc2FsdG8ubmVidWxhLnVzZXIudjEuVXNlciJVChNBY2Nlc3NQb2ludExlZnRPcGVuEj4KDGFjY2Vzc19wb2ludBgBIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3Nwb2ludC52MS5BY2Nlc3NQb2ludCJUChJBY2Nlc3NSaWdodENyZWF0ZWQSPgoMYWNjZXNzX3JpZ2h0GAEgASgLMiguc2FsdG8ubmVidWxhLmFjY2Vzc3JpZ2h0LnYxLkFjY2Vzc1JpZ2h0IlQKEkFjY2Vzc1JpZ2h0VXBkYXRlZBI+CgxhY2Nlc3NfcmlnaHQYASABKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcmlnaHQudjEuQWNjZXNzUmlnaHQiVAoSQWNjZXNzUmlnaHREZWxldGVkEj4KDGFjY2Vzc19yaWdodBgBIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3NyaWdodC52MS5BY2Nlc3NSaWdodCKfAQodQWNjZXNzUmlnaHRBY2Nlc3NQb2ludENyZWF0ZWQSPgoMYWNjZXNzX3JpZ2h0GAEgASgLMiguc2FsdG8ubmVidWxhLmFjY2Vzc3JpZ2h0LnYxLkFjY2Vzc1JpZ2h0Ej4KDGFjY2Vzc19wb2ludBgCIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3Nwb2ludC52MS5BY2Nlc3NQb2ludCKmAQojQWNjZXNzUmlnaHRBY2Nlc3NQb2ludHNCYXRjaENyZWF0ZWQSPgoMYWNjZXNzX3JpZ2h0GAEgASgLMiguc2FsdG8ubmVidWxhLmFjY2Vzc3JpZ2h0LnYxLkFjY2Vzc1JpZ2h0Ej8KDWFjY2Vzc19wb2ludHMYAiADKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcG9pbnQudjEuQWNjZXNzUG9pbnQinwEKHUFjY2Vzc1JpZ2h0QWNjZXNzUG9pbnREZWxldGVkEj4KDGFjY2Vzc19yaWdodBgBIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3NyaWdodC52MS5BY2Nlc3NSaWdodBI+CgxhY2Nlc3NfcG9pbnQYAiABKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcG9pbnQudjEuQWNjZXNzUG9pbnQipgEKI0FjY2Vzc1JpZ2h0QWNjZXNzUG9pbnRzQmF0Y2hEZWxldGVkEj4KDGFjY2Vzc19yaWdodBgBIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3NyaWdodC52MS5BY2Nlc3NSaWdodBI/Cg1hY2Nlc3NfcG9pbnRzGAIgAygLMiguc2FsdG8ubmVidWxhLmFjY2Vzc3BvaW50LnYxLkFjY2Vzc1BvaW50IjcKC1VzZXJDcmVhdGVkEigKBHVzZXIYASABKAsyGi5zYWx0by5uZWJ1bGEudXNlci52MS5Vc2VyIjcKC1VzZXJVcGRhdGVkEigKBHVzZXIYASABKAsyGi5zYWx0by5uZWJ1bGEudXNlci52MS5Vc2VyIjcKC1VzZXJCbG9ja2VkEigKBHVzZXIYASABKAsyGi5zYWx0by5uZWJ1bGEudXNlci52MS5Vc2VyIjkKDVVzZXJVbmJsb2NrZWQSKAoEdXNlchgBIAEoCzIaLnNhbHRvLm5lYnVsYS51c2VyLnYxLlVzZXIiNwoLVXNlckRlbGV0ZWQSKAoEdXNlchgBIAEoCzIaLnNhbHRvLm5lYnVsYS51c2VyLnYxLlVzZXIiggEKFlVzZXJBY2Nlc3NSaWdodENyZWF0ZWQSKAoEdXNlchgBIAEoCzIaLnNhbHRvLm5lYnVsYS51c2VyLnYxLlVzZXISPgoMYWNjZXNzX3JpZ2h0GAIgASgLMiguc2FsdG8ubmVidWxhLmFjY2Vzc3JpZ2h0LnYxLkFjY2Vzc1JpZ2h0IoIBChZVc2VyQWNjZXNzUmlnaHRVcGRhdGVkEigKBHVzZXIYASABKAsyGi5zYWx0by5uZWJ1bGEudXNlci52MS5Vc2VyEj4KDGFjY2Vzc19yaWdodBgCIAEoCzIoLnNhbHRvLm5lYnVsYS5hY2Nlc3NyaWdodC52MS5BY2Nlc3NSaWdodCKCAQoWVXNlckFjY2Vzc1JpZ2h0RGVsZXRlZBIoCgR1c2VyGAEgASgLMhouc2FsdG8ubmVidWxhLnVzZXIudjEuVXNlchI+CgxhY2Nlc3NfcmlnaHQYAiABKAsyKC5zYWx0by5uZWJ1bGEuYWNjZXNzcmlnaHQudjEuQWNjZXNzUmlnaHQibAoPQ2FyZEtleUFzc2lnbmVkEigKBHVzZXIYASABKAsyGi5zYWx0by5uZWJ1bGEudXNlci52MS5Vc2VyEi8KCGNhcmRfa2V5GAIgASgLMh0uc2FsdG8ubmVidWxhLnVzZXIudjEuQ2FyZEtleSJsCg9DYXJkS2V5Q2FuY2VsZWQSKAoEdXNlchgBIAEoCzIaLnNhbHRvLm5lYnVsYS51c2VyLnYxLlVzZXISLwoIY2FyZF9rZXkYAiABKAsyHS5zYWx0by5uZWJ1bGEudXNlci52MS5DYXJkS2V5ImkKDkFwcEtleUFzc2lnbmVkEigKBHVzZXIYASABKAsyGi5zYWx0by5uZWJ1bGEudXNlci52MS5Vc2VyEi0KB2FwcF9rZXkYAiABKAsyHC5zYWx0by5uZWJ1bGEudXNlci52MS5BcHBLZXkiaQoOQXBwS2V5Q2FuY2VsZWQSKAoEdXNlchgBIAEoCzIaLnNhbHRvLm5lYnVsYS51c2VyLnYxLlVzZXISLQoHYXBwX2tleRgCIAEoCzIcLnNhbHRvLm5lYnVsYS51c2VyLnYxLkFwcEtleSJyChFXYWxsZXRLZXlBc3NpZ25lZBIoCgR1c2VyGAEgASgLMhouc2FsdG8ubmVidWxhLnVzZXIudjEuVXNlchIzCgp3YWxsZXRfa2V5GAIgASgLMh8uc2FsdG8ubmVidWxhLnVzZXIudjEuV2FsbGV0S2V5InIKEVdhbGxldEtleUNhbmNlbGVkEigKBHVzZXIYASABKAsyGi5zYWx0by5uZWJ1bGEudXNlci52MS5Vc2VyEjMKCndhbGxldF9rZXkYAiABKAsyHy5zYWx0by5uZWJ1bGEudXNlci52MS5XYWxsZXRLZXkiNwoLVW5pdE1vdmVkSW4SKAoEdW5pdBgBIAEoCzIaLnNhbHRvLm5lYnVsYS51bml0LnYxLlVuaXQiOAoMVW5pdE1vdmVkT3V0EigKBHVuaXQYASABKAsyGi5zYWx0by5uZWJ1bGEudW5pdC52MS5Vbml0IjcKC1VuaXRDcmVhdGVkEigKBHVuaXQYASABKAsyGi5zYWx0by5uZWJ1bGEudW5pdC52MS5Vbml0IjcKC1VuaXRVcGRhdGVkEigKBHVuaXQYASABKAsyGi5zYWx0by5uZWJ1bGEudW5pdC52MS5Vbml0IjcKC1VuaXREZWxldGVkEigKBHVuaXQYASABKAsyGi5zYWx0by5uZWJ1bGEudW5pdC52MS5Vbml0IlgKE0VtZXJnZW5jeUtleUNyZWF0ZWQSQQoNZW1lcmdlbmN5X2tleRgBIAEoCzIqLnNhbHRvLm5lYnVsYS5lbWVyZ2VuY3lrZXkudjEuRW1lcmdlbmN5S2V5IlgKE0VtZXJnZW5jeUtleVVwZGF0ZWQSQQoNZW1lcmdlbmN5X2tleRgBIAEoCzIqLnNhbHRvLm5lYnVsYS5lbWVyZ2VuY3lrZXkudjEuRW1lcmdlbmN5S2V5IlgKE0VtZXJnZW5jeUtleURlbGV0ZWQSQQoNZW1lcmdlbmN5X2tleRgBIAEoCzIqLnNhbHRvLm5lYnVsYS5lbWVyZ2VuY3lrZXkudjEuRW1lcmdlbmN5S2V5Qs8BCh1jb20uc2FsdG9hcGlzLm5lYnVsYS5ldmVudC52MUIKVHlwZXNQcm90b1ABWkBnaXRodWIuY29tL3NhbHRvYXBpcy1pbnRlcm5hbC9zYWx0b2FwaXMtZ28vbmVidWxhL2V2ZW50L3YxO2V2ZW50qgIZU2FsdG9hcGlzLk5lYnVsYS5FdmVudC5WMcoCGVNhbHRvYXBpc1xOZWJ1bGFcRXZlbnRcVjHiAiVHUEJNZXRhZGF0YVxTYWx0b2FwaXNcTmVidWxhXEV2ZW50XFYxYgZwcm90bzM", [file_salto_nebula_accesspoint_v1_access_point, file_salto_nebula_accessright_v1_access_right, file_salto_nebula_emergencykey_v1_emergency_key, file_salto_nebula_unit_v1_unit, file_salto_nebula_user_v1_user]);

/**
 * Event representing the creation of an access point.
 *
 * @generated from message salto.nebula.event.v1.AccessPointCreated
 */
export type AccessPointCreated = Message<"salto.nebula.event.v1.AccessPointCreated"> & {
  /**
   * Access point created.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointCreated.
 * Use `create(AccessPointCreatedSchema)` to create a new message.
 */
export const AccessPointCreatedSchema: GenMessage<AccessPointCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 0);

/**
 * Event representing the update of an access point.
 *
 * @generated from message salto.nebula.event.v1.AccessPointUpdated
 */
export type AccessPointUpdated = Message<"salto.nebula.event.v1.AccessPointUpdated"> & {
  /**
   * Access point updated.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointUpdated.
 * Use `create(AccessPointUpdatedSchema)` to create a new message.
 */
export const AccessPointUpdatedSchema: GenMessage<AccessPointUpdated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 1);

/**
 * Event representing the deletion of an access point.
 *
 * @generated from message salto.nebula.event.v1.AccessPointDeleted
 */
export type AccessPointDeleted = Message<"salto.nebula.event.v1.AccessPointDeleted"> & {
  /**
   * Access point deleted.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointDeleted.
 * Use `create(AccessPointDeletedSchema)` to create a new message.
 */
export const AccessPointDeletedSchema: GenMessage<AccessPointDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 2);

/**
 * Event representing the unlocking of an access point.
 *
 * @generated from message salto.nebula.event.v1.AccessPointUnlocked
 */
export type AccessPointUnlocked = Message<"salto.nebula.event.v1.AccessPointUnlocked"> & {
  /**
   * The access point that's been unlocked.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;

  /**
   * The user who unlocked the access point, if any.
   *
   * @generated from field: salto.nebula.user.v1.User user = 2;
   */
  user?: User;

  /**
   * The credential type used to unlock the access point.
   *
   * @generated from oneof salto.nebula.event.v1.AccessPointUnlocked.credential
   */
  credential: {
    /**
     * The emergency key used to unlock the access point.
     *
     * @generated from field: salto.nebula.emergencykey.v1.EmergencyKey emergency_key = 3;
     */
    value: EmergencyKey;
    case: "emergencyKey";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointUnlocked.
 * Use `create(AccessPointUnlockedSchema)` to create a new message.
 */
export const AccessPointUnlockedSchema: GenMessage<AccessPointUnlocked> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 3);

/**
 * Event representing the locking of an access point.
 *
 * @generated from message salto.nebula.event.v1.AccessPointLocked
 */
export type AccessPointLocked = Message<"salto.nebula.event.v1.AccessPointLocked"> & {
  /**
   * The access point that's been locked.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;

  /**
   * The user who locked the access point.
   *
   * @generated from field: salto.nebula.user.v1.User user = 2;
   */
  user?: User;
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointLocked.
 * Use `create(AccessPointLockedSchema)` to create a new message.
 */
export const AccessPointLockedSchema: GenMessage<AccessPointLocked> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 4);

/**
 * Event representing a forced open of an access point.
 *
 * @generated from message salto.nebula.event.v1.AccessPointForcedOpen
 */
export type AccessPointForcedOpen = Message<"salto.nebula.event.v1.AccessPointForcedOpen"> & {
  /**
   * The access point that's been forced open.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointForcedOpen.
 * Use `create(AccessPointForcedOpenSchema)` to create a new message.
 */
export const AccessPointForcedOpenSchema: GenMessage<AccessPointForcedOpen> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 5);

/**
 * Event representing the closing of an access point.
 * This event might not be triggered with all access point closures, but only
 * with those that happen after events such as access point left open or forced
 * open.
 *
 * @generated from message salto.nebula.event.v1.AccessPointClosed
 */
export type AccessPointClosed = Message<"salto.nebula.event.v1.AccessPointClosed"> & {
  /**
   * The access point that's been closed.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointClosed.
 * Use `create(AccessPointClosedSchema)` to create a new message.
 */
export const AccessPointClosedSchema: GenMessage<AccessPointClosed> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 6);

/**
 * Event representing a denied access to a user by an access point.
 *
 * @generated from message salto.nebula.event.v1.AccessDenied
 */
export type AccessDenied = Message<"salto.nebula.event.v1.AccessDenied"> & {
  /**
   * Access denied by the access point.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;

  /**
   * The user whose access was rejected.
   *
   * @generated from field: salto.nebula.user.v1.User user = 2;
   */
  user?: User;
};

/**
 * Describes the message salto.nebula.event.v1.AccessDenied.
 * Use `create(AccessDeniedSchema)` to create a new message.
 */
export const AccessDeniedSchema: GenMessage<AccessDenied> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 7);

/**
 * Event representing the detection of an access point that's been left open.
 *
 * @generated from message salto.nebula.event.v1.AccessPointLeftOpen
 */
export type AccessPointLeftOpen = Message<"salto.nebula.event.v1.AccessPointLeftOpen"> & {
  /**
   * The access point that's been left open.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 1;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessPointLeftOpen.
 * Use `create(AccessPointLeftOpenSchema)` to create a new message.
 */
export const AccessPointLeftOpenSchema: GenMessage<AccessPointLeftOpen> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 8);

/**
 * Event representing the creation of an access right.
 *
 * @generated from message salto.nebula.event.v1.AccessRightCreated
 */
export type AccessRightCreated = Message<"salto.nebula.event.v1.AccessRightCreated"> & {
  /**
   * Access right created.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 1;
   */
  accessRight?: AccessRight;
};

/**
 * Describes the message salto.nebula.event.v1.AccessRightCreated.
 * Use `create(AccessRightCreatedSchema)` to create a new message.
 */
export const AccessRightCreatedSchema: GenMessage<AccessRightCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 9);

/**
 * Event representing the update of an access right.
 *
 * @generated from message salto.nebula.event.v1.AccessRightUpdated
 */
export type AccessRightUpdated = Message<"salto.nebula.event.v1.AccessRightUpdated"> & {
  /**
   * Access right updated.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 1;
   */
  accessRight?: AccessRight;
};

/**
 * Describes the message salto.nebula.event.v1.AccessRightUpdated.
 * Use `create(AccessRightUpdatedSchema)` to create a new message.
 */
export const AccessRightUpdatedSchema: GenMessage<AccessRightUpdated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 10);

/**
 * Event representing the deletion of an access right.
 *
 * @generated from message salto.nebula.event.v1.AccessRightDeleted
 */
export type AccessRightDeleted = Message<"salto.nebula.event.v1.AccessRightDeleted"> & {
  /**
   * Access right deleted.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 1;
   */
  accessRight?: AccessRight;
};

/**
 * Describes the message salto.nebula.event.v1.AccessRightDeleted.
 * Use `create(AccessRightDeletedSchema)` to create a new message.
 */
export const AccessRightDeletedSchema: GenMessage<AccessRightDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 11);

/**
 * Event representing the creation of an access right's access point association.
 *
 * @generated from message salto.nebula.event.v1.AccessRightAccessPointCreated
 */
export type AccessRightAccessPointCreated = Message<"salto.nebula.event.v1.AccessRightAccessPointCreated"> & {
  /**
   * Access point's access right association created.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 1;
   */
  accessRight?: AccessRight;

  /**
   * Access right's access point association created.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 2;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessRightAccessPointCreated.
 * Use `create(AccessRightAccessPointCreatedSchema)` to create a new message.
 */
export const AccessRightAccessPointCreatedSchema: GenMessage<AccessRightAccessPointCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 12);

/**
 * Event representing the creation of multiple access right's access points association.
 *
 * @generated from message salto.nebula.event.v1.AccessRightAccessPointsBatchCreated
 */
export type AccessRightAccessPointsBatchCreated = Message<"salto.nebula.event.v1.AccessRightAccessPointsBatchCreated"> & {
  /**
   * The access right to which the access points have been added.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 1;
   */
  accessRight?: AccessRight;

  /**
   * The access points added to the access right.
   *
   * @generated from field: repeated salto.nebula.accesspoint.v1.AccessPoint access_points = 2;
   */
  accessPoints: AccessPoint[];
};

/**
 * Describes the message salto.nebula.event.v1.AccessRightAccessPointsBatchCreated.
 * Use `create(AccessRightAccessPointsBatchCreatedSchema)` to create a new message.
 */
export const AccessRightAccessPointsBatchCreatedSchema: GenMessage<AccessRightAccessPointsBatchCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 13);

/**
 * Event representing the deletion of an access right's access point association.
 *
 * @generated from message salto.nebula.event.v1.AccessRightAccessPointDeleted
 */
export type AccessRightAccessPointDeleted = Message<"salto.nebula.event.v1.AccessRightAccessPointDeleted"> & {
  /**
   * Access point's access right association deleted.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 1;
   */
  accessRight?: AccessRight;

  /**
   * Access right's access point association deleted.
   *
   * @generated from field: salto.nebula.accesspoint.v1.AccessPoint access_point = 2;
   */
  accessPoint?: AccessPoint;
};

/**
 * Describes the message salto.nebula.event.v1.AccessRightAccessPointDeleted.
 * Use `create(AccessRightAccessPointDeletedSchema)` to create a new message.
 */
export const AccessRightAccessPointDeletedSchema: GenMessage<AccessRightAccessPointDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 14);

/**
 * Event representing the deletion of multiple access right's access point association.
 *
 * @generated from message salto.nebula.event.v1.AccessRightAccessPointsBatchDeleted
 */
export type AccessRightAccessPointsBatchDeleted = Message<"salto.nebula.event.v1.AccessRightAccessPointsBatchDeleted"> & {
  /**
   * The access right to which the access points have been removed.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 1;
   */
  accessRight?: AccessRight;

  /**
   * The access points removed from the access right.
   *
   * @generated from field: repeated salto.nebula.accesspoint.v1.AccessPoint access_points = 2;
   */
  accessPoints: AccessPoint[];
};

/**
 * Describes the message salto.nebula.event.v1.AccessRightAccessPointsBatchDeleted.
 * Use `create(AccessRightAccessPointsBatchDeletedSchema)` to create a new message.
 */
export const AccessRightAccessPointsBatchDeletedSchema: GenMessage<AccessRightAccessPointsBatchDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 15);

/**
 * Event representing the creation of a user.
 *
 * @generated from message salto.nebula.event.v1.UserCreated
 */
export type UserCreated = Message<"salto.nebula.event.v1.UserCreated"> & {
  /**
   * User created.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message salto.nebula.event.v1.UserCreated.
 * Use `create(UserCreatedSchema)` to create a new message.
 */
export const UserCreatedSchema: GenMessage<UserCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 16);

/**
 * Event representing the update of a user.
 *
 * @generated from message salto.nebula.event.v1.UserUpdated
 */
export type UserUpdated = Message<"salto.nebula.event.v1.UserUpdated"> & {
  /**
   * User updated.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message salto.nebula.event.v1.UserUpdated.
 * Use `create(UserUpdatedSchema)` to create a new message.
 */
export const UserUpdatedSchema: GenMessage<UserUpdated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 17);

/**
 * Event representing the block of a user.
 *
 * @generated from message salto.nebula.event.v1.UserBlocked
 */
export type UserBlocked = Message<"salto.nebula.event.v1.UserBlocked"> & {
  /**
   * User blocked.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message salto.nebula.event.v1.UserBlocked.
 * Use `create(UserBlockedSchema)` to create a new message.
 */
export const UserBlockedSchema: GenMessage<UserBlocked> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 18);

/**
 * Event representing the unblock of a user.
 *
 * @generated from message salto.nebula.event.v1.UserUnblocked
 */
export type UserUnblocked = Message<"salto.nebula.event.v1.UserUnblocked"> & {
  /**
   * User unblocked.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message salto.nebula.event.v1.UserUnblocked.
 * Use `create(UserUnblockedSchema)` to create a new message.
 */
export const UserUnblockedSchema: GenMessage<UserUnblocked> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 19);

/**
 * Event representing the deletion of a user.
 *
 * @generated from message salto.nebula.event.v1.UserDeleted
 */
export type UserDeleted = Message<"salto.nebula.event.v1.UserDeleted"> & {
  /**
   * User deleted.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message salto.nebula.event.v1.UserDeleted.
 * Use `create(UserDeletedSchema)` to create a new message.
 */
export const UserDeletedSchema: GenMessage<UserDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 20);

/**
 * Event representing the creation of a user's access right association.
 *
 * @generated from message salto.nebula.event.v1.UserAccessRightCreated
 */
export type UserAccessRightCreated = Message<"salto.nebula.event.v1.UserAccessRightCreated"> & {
  /**
   * Access right's user association created.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * User's access right association created.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 2;
   */
  accessRight?: AccessRight;
};

/**
 * Describes the message salto.nebula.event.v1.UserAccessRightCreated.
 * Use `create(UserAccessRightCreatedSchema)` to create a new message.
 */
export const UserAccessRightCreatedSchema: GenMessage<UserAccessRightCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 21);

/**
 * Event representing the update of a user's access right association.
 *
 * @generated from message salto.nebula.event.v1.UserAccessRightUpdated
 */
export type UserAccessRightUpdated = Message<"salto.nebula.event.v1.UserAccessRightUpdated"> & {
  /**
   * Access right's user association updated.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * User's access right association updated.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 2;
   */
  accessRight?: AccessRight;
};

/**
 * Describes the message salto.nebula.event.v1.UserAccessRightUpdated.
 * Use `create(UserAccessRightUpdatedSchema)` to create a new message.
 */
export const UserAccessRightUpdatedSchema: GenMessage<UserAccessRightUpdated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 22);

/**
 * Event representing the deletion of a user's access right association.
 *
 * @generated from message salto.nebula.event.v1.UserAccessRightDeleted
 */
export type UserAccessRightDeleted = Message<"salto.nebula.event.v1.UserAccessRightDeleted"> & {
  /**
   * Access right's user association deleted.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * User's access right association deleted.
   *
   * @generated from field: salto.nebula.accessright.v1.AccessRight access_right = 2;
   */
  accessRight?: AccessRight;
};

/**
 * Describes the message salto.nebula.event.v1.UserAccessRightDeleted.
 * Use `create(UserAccessRightDeletedSchema)` to create a new message.
 */
export const UserAccessRightDeletedSchema: GenMessage<UserAccessRightDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 23);

/**
 * Event representing the assignment of a user's card key.
 *
 * @generated from message salto.nebula.event.v1.CardKeyAssigned
 */
export type CardKeyAssigned = Message<"salto.nebula.event.v1.CardKeyAssigned"> & {
  /**
   * Card key's user.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * Card key assigned.
   *
   * @generated from field: salto.nebula.user.v1.CardKey card_key = 2;
   */
  cardKey?: CardKey;
};

/**
 * Describes the message salto.nebula.event.v1.CardKeyAssigned.
 * Use `create(CardKeyAssignedSchema)` to create a new message.
 */
export const CardKeyAssignedSchema: GenMessage<CardKeyAssigned> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 24);

/**
 * Event representing the cancelation of a user's card key.
 *
 * @generated from message salto.nebula.event.v1.CardKeyCanceled
 */
export type CardKeyCanceled = Message<"salto.nebula.event.v1.CardKeyCanceled"> & {
  /**
   * Card key's user.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * Card key canceled.
   *
   * @generated from field: salto.nebula.user.v1.CardKey card_key = 2;
   */
  cardKey?: CardKey;
};

/**
 * Describes the message salto.nebula.event.v1.CardKeyCanceled.
 * Use `create(CardKeyCanceledSchema)` to create a new message.
 */
export const CardKeyCanceledSchema: GenMessage<CardKeyCanceled> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 25);

/**
 * Event representing the assignment of a user's app key.
 *
 * @generated from message salto.nebula.event.v1.AppKeyAssigned
 */
export type AppKeyAssigned = Message<"salto.nebula.event.v1.AppKeyAssigned"> & {
  /**
   * App key's user.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * App key assigned.
   *
   * @generated from field: salto.nebula.user.v1.AppKey app_key = 2;
   */
  appKey?: AppKey;
};

/**
 * Describes the message salto.nebula.event.v1.AppKeyAssigned.
 * Use `create(AppKeyAssignedSchema)` to create a new message.
 */
export const AppKeyAssignedSchema: GenMessage<AppKeyAssigned> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 26);

/**
 * Event representing the cancelation of a user's app key.
 *
 * @generated from message salto.nebula.event.v1.AppKeyCanceled
 */
export type AppKeyCanceled = Message<"salto.nebula.event.v1.AppKeyCanceled"> & {
  /**
   * App key's user.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * App key canceled.
   *
   * @generated from field: salto.nebula.user.v1.AppKey app_key = 2;
   */
  appKey?: AppKey;
};

/**
 * Describes the message salto.nebula.event.v1.AppKeyCanceled.
 * Use `create(AppKeyCanceledSchema)` to create a new message.
 */
export const AppKeyCanceledSchema: GenMessage<AppKeyCanceled> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 27);

/**
 * Event representing the assignment of a user's wallet key.
 *
 * @generated from message salto.nebula.event.v1.WalletKeyAssigned
 */
export type WalletKeyAssigned = Message<"salto.nebula.event.v1.WalletKeyAssigned"> & {
  /**
   * Wallet key's user.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * Wallet key assigned.
   *
   * @generated from field: salto.nebula.user.v1.WalletKey wallet_key = 2;
   */
  walletKey?: WalletKey;
};

/**
 * Describes the message salto.nebula.event.v1.WalletKeyAssigned.
 * Use `create(WalletKeyAssignedSchema)` to create a new message.
 */
export const WalletKeyAssignedSchema: GenMessage<WalletKeyAssigned> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 28);

/**
 * Event representing the cancelation of a user's wallet key.
 *
 * @generated from message salto.nebula.event.v1.WalletKeyCanceled
 */
export type WalletKeyCanceled = Message<"salto.nebula.event.v1.WalletKeyCanceled"> & {
  /**
   * Wallet key's user.
   *
   * @generated from field: salto.nebula.user.v1.User user = 1;
   */
  user?: User;

  /**
   * Wallet key canceled.
   *
   * @generated from field: salto.nebula.user.v1.WalletKey wallet_key = 2;
   */
  walletKey?: WalletKey;
};

/**
 * Describes the message salto.nebula.event.v1.WalletKeyCanceled.
 * Use `create(WalletKeyCanceledSchema)` to create a new message.
 */
export const WalletKeyCanceledSchema: GenMessage<WalletKeyCanceled> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 29);

/**
 * Event representing the move in of a unit.
 *
 * @generated from message salto.nebula.event.v1.UnitMovedIn
 */
export type UnitMovedIn = Message<"salto.nebula.event.v1.UnitMovedIn"> & {
  /**
   * Unit moved in.
   *
   * @generated from field: salto.nebula.unit.v1.Unit unit = 1;
   */
  unit?: Unit;
};

/**
 * Describes the message salto.nebula.event.v1.UnitMovedIn.
 * Use `create(UnitMovedInSchema)` to create a new message.
 */
export const UnitMovedInSchema: GenMessage<UnitMovedIn> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 30);

/**
 * Event representing the move out of a unit.
 *
 * @generated from message salto.nebula.event.v1.UnitMovedOut
 */
export type UnitMovedOut = Message<"salto.nebula.event.v1.UnitMovedOut"> & {
  /**
   * Unit moved out.
   *
   * @generated from field: salto.nebula.unit.v1.Unit unit = 1;
   */
  unit?: Unit;
};

/**
 * Describes the message salto.nebula.event.v1.UnitMovedOut.
 * Use `create(UnitMovedOutSchema)` to create a new message.
 */
export const UnitMovedOutSchema: GenMessage<UnitMovedOut> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 31);

/**
 * Event representing the creation of a unit.
 *
 * @generated from message salto.nebula.event.v1.UnitCreated
 */
export type UnitCreated = Message<"salto.nebula.event.v1.UnitCreated"> & {
  /**
   * Unit created.
   *
   * @generated from field: salto.nebula.unit.v1.Unit unit = 1;
   */
  unit?: Unit;
};

/**
 * Describes the message salto.nebula.event.v1.UnitCreated.
 * Use `create(UnitCreatedSchema)` to create a new message.
 */
export const UnitCreatedSchema: GenMessage<UnitCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 32);

/**
 * Event representing the update of a unit.
 *
 * @generated from message salto.nebula.event.v1.UnitUpdated
 */
export type UnitUpdated = Message<"salto.nebula.event.v1.UnitUpdated"> & {
  /**
   * Unit updated.
   *
   * @generated from field: salto.nebula.unit.v1.Unit unit = 1;
   */
  unit?: Unit;
};

/**
 * Describes the message salto.nebula.event.v1.UnitUpdated.
 * Use `create(UnitUpdatedSchema)` to create a new message.
 */
export const UnitUpdatedSchema: GenMessage<UnitUpdated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 33);

/**
 * Event representing the deletion of a unit.
 *
 * @generated from message salto.nebula.event.v1.UnitDeleted
 */
export type UnitDeleted = Message<"salto.nebula.event.v1.UnitDeleted"> & {
  /**
   * Unit deleted.
   *
   * @generated from field: salto.nebula.unit.v1.Unit unit = 1;
   */
  unit?: Unit;
};

/**
 * Describes the message salto.nebula.event.v1.UnitDeleted.
 * Use `create(UnitDeletedSchema)` to create a new message.
 */
export const UnitDeletedSchema: GenMessage<UnitDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 34);

/**
 * Event representing the creation of an emergency key.
 *
 * @generated from message salto.nebula.event.v1.EmergencyKeyCreated
 */
export type EmergencyKeyCreated = Message<"salto.nebula.event.v1.EmergencyKeyCreated"> & {
  /**
   * Emergency key created.
   *
   * @generated from field: salto.nebula.emergencykey.v1.EmergencyKey emergency_key = 1;
   */
  emergencyKey?: EmergencyKey;
};

/**
 * Describes the message salto.nebula.event.v1.EmergencyKeyCreated.
 * Use `create(EmergencyKeyCreatedSchema)` to create a new message.
 */
export const EmergencyKeyCreatedSchema: GenMessage<EmergencyKeyCreated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 35);

/**
 * Event representing the update of an emergency key.
 *
 * @generated from message salto.nebula.event.v1.EmergencyKeyUpdated
 */
export type EmergencyKeyUpdated = Message<"salto.nebula.event.v1.EmergencyKeyUpdated"> & {
  /**
   * Emergency key updated.
   *
   * @generated from field: salto.nebula.emergencykey.v1.EmergencyKey emergency_key = 1;
   */
  emergencyKey?: EmergencyKey;
};

/**
 * Describes the message salto.nebula.event.v1.EmergencyKeyUpdated.
 * Use `create(EmergencyKeyUpdatedSchema)` to create a new message.
 */
export const EmergencyKeyUpdatedSchema: GenMessage<EmergencyKeyUpdated> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 36);

/**
 * Event representing the deletion of an emergency key.
 *
 * @generated from message salto.nebula.event.v1.EmergencyKeyDeleted
 */
export type EmergencyKeyDeleted = Message<"salto.nebula.event.v1.EmergencyKeyDeleted"> & {
  /**
   * Emergency key deleted.
   *
   * @generated from field: salto.nebula.emergencykey.v1.EmergencyKey emergency_key = 1;
   */
  emergencyKey?: EmergencyKey;
};

/**
 * Describes the message salto.nebula.event.v1.EmergencyKeyDeleted.
 * Use `create(EmergencyKeyDeletedSchema)` to create a new message.
 */
export const EmergencyKeyDeletedSchema: GenMessage<EmergencyKeyDeleted> = /*@__PURE__*/
  messageDesc(file_salto_nebula_event_v1_types, 37);

