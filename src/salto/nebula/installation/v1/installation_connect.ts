// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/installation/v1/installation.proto (package salto.nebula.installation.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AcceptInstallationOwnershipRequest, AcceptInstallationOwnershipResponse, ApplyCouponRequest, ApplyCouponResponse, BillingInfo, CreateInstallationRequest, CreatePaymentAuthorizationRequest, CreatePolicyRequest, DeleteInstallationRequest, DeletePolicyRequest, GetInstallationRequest, GetPolicyRequest, GetSubscriptionRequest, Installation, ListInstallationsRequest, ListInstallationsResponse, ListInvoicesRequest, ListInvoicesResponse, ListPoliciesRequest, ListPoliciesResponse, PaymentAuthorization, PaymentMethod, Policy, Subscription, TestPermissionsRequest, TestPermissionsResponse, TransferInstallationOwnershipRequest, TransferInstallationOwnershipResponse, UnapplyCouponRequest, UnapplyCouponResponse, UndeleteInstallationRequest, UpdateBillingInfoRequest, UpdateCardRequest, UpdateCardResponse, UpdateInstallationRequest, UpdatePaymentMethodRequest, UpdatePolicyRequest } from "./installation_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * An installation represents any entity such as a company, office or building
 * that contains all the access control objects (access points, access rights,
 * users, etc.) that comprise the access control system within a facility.
 *
 * @generated from service salto.nebula.installation.v1.InstallationService
 */
export const InstallationService = {
  typeName: "salto.nebula.installation.v1.InstallationService",
  methods: {
    /**
     * Create an installation
     *
     * Creates a new installation.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.CreateInstallation
     */
    createInstallation: {
      name: "CreateInstallation",
      I: CreateInstallationRequest,
      O: Installation,
      kind: MethodKind.Unary,
    },
    /**
     * Get an installation
     *
     * Retrieves an existing installation.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.GetInstallation
     */
    getInstallation: {
      name: "GetInstallation",
      I: GetInstallationRequest,
      O: Installation,
      kind: MethodKind.Unary,
    },
    /**
     * List installations
     *
     * Returns a list of installations that have been previously created.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.ListInstallations
     */
    listInstallations: {
      name: "ListInstallations",
      I: ListInstallationsRequest,
      O: ListInstallationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an installation
     *
     * Updates an existing installation.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.UpdateInstallation
     */
    updateInstallation: {
      name: "UpdateInstallation",
      I: UpdateInstallationRequest,
      O: Installation,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an installation
     *
     * Soft deletes an installation. This action can be reversed if required.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.DeleteInstallation
     */
    deleteInstallation: {
      name: "DeleteInstallation",
      I: DeleteInstallationRequest,
      O: Installation,
      kind: MethodKind.Unary,
    },
    /**
     * Undelete an installation
     *
     * Undeletes an installation.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.UndeleteInstallation
     */
    undeleteInstallation: {
      name: "UndeleteInstallation",
      I: UndeleteInstallationRequest,
      O: Installation,
      kind: MethodKind.Unary,
    },
    /**
     * Create a policy
     *
     * Creates a policy for the installation. An IAM policy is a collection of
     * roles associated to users that define who has what type of access to manage
     * access control objects within the installation.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.CreatePolicy
     */
    createPolicy: {
      name: "CreatePolicy",
      I: CreatePolicyRequest,
      O: Policy,
      kind: MethodKind.Unary,
    },
    /**
     * Get a policy
     *
     * Retrieves an existing policy.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.GetPolicy
     */
    getPolicy: {
      name: "GetPolicy",
      I: GetPolicyRequest,
      O: Policy,
      kind: MethodKind.Unary,
    },
    /**
     * List policies
     *
     * Returns a list of policies that have been previously created.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.ListPolicies
     */
    listPolicies: {
      name: "ListPolicies",
      I: ListPoliciesRequest,
      O: ListPoliciesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a policy
     *
     * Updates an existing policy.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.UpdatePolicy
     */
    updatePolicy: {
      name: "UpdatePolicy",
      I: UpdatePolicyRequest,
      O: Policy,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a policy
     *
     * Permanently deletes a policy. This cannot be undone.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.DeletePolicy
     */
    deletePolicy: {
      name: "DeletePolicy",
      I: DeletePolicyRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Tests permissions
     *
     * Returns permissions that a caller has within the installation. If the
     * installation does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.TestPermissions
     */
    testPermissions: {
      name: "TestPermissions",
      I: TestPermissionsRequest,
      O: TestPermissionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Transfer installation ownership
     *
     * Transfers the ownership of an installation.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.TransferInstallationOwnership
     */
    transferInstallationOwnership: {
      name: "TransferInstallationOwnership",
      I: TransferInstallationOwnershipRequest,
      O: TransferInstallationOwnershipResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Accept installation ownership
     *
     * Accepts the ownership of an installation.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.AcceptInstallationOwnership
     */
    acceptInstallationOwnership: {
      name: "AcceptInstallationOwnership",
      I: AcceptInstallationOwnershipRequest,
      O: AcceptInstallationOwnershipResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a subscription
     *
     * Gets an existing subscription
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.GetSubscription
     */
    getSubscription: {
      name: "GetSubscription",
      I: GetSubscriptionRequest,
      O: Subscription,
      kind: MethodKind.Unary,
    },
    /**
     * Update a subscription's billing information
     *
     * Updates an existing subscription's billing information.
     * (-- api-linter: core::0134::method-signature=disabled
     *     aip.dev/not-precedent: We need to do this to simplify the update operation. --)
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.UpdateBillingInfo
     */
    updateBillingInfo: {
      name: "UpdateBillingInfo",
      I: UpdateBillingInfoRequest,
      O: BillingInfo,
      kind: MethodKind.Unary,
    },
    /**
     * Update subscription payment method
     *
     * Updates an existing subscription payment method. If there is a payment
     * method associated with the subscription, it will be deleted.
     * (-- api-linter: core::0134::method-signature=disabled
     *     aip.dev/not-precedent: We need to do this to simplify the update operation. --)
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.UpdatePaymentMethod
     */
    updatePaymentMethod: {
      name: "UpdatePaymentMethod",
      I: UpdatePaymentMethodRequest,
      O: PaymentMethod,
      kind: MethodKind.Unary,
    },
    /**
     * Update subscription payment method's card
     *
     * Updates subscription payment method's card. If there is a payment method
     * associated with the subscription, it will be deleted.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.UpdateCard
     */
    updateCard: {
      name: "UpdateCard",
      I: UpdateCardRequest,
      O: UpdateCardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create a payment authorization
     *
     * Creates a payment authorization for the subscription.
     * The payment authorization is a process that allows the customer to
     * authorize a payment card for future use. This is done by creating a payment
     * authorization request. The result of the request is a payment authorization
     * that must be authorized by the client in the client's UI.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.CreatePaymentAuthorization
     */
    createPaymentAuthorization: {
      name: "CreatePaymentAuthorization",
      I: CreatePaymentAuthorizationRequest,
      O: PaymentAuthorization,
      kind: MethodKind.Unary,
    },
    /**
     * List invoices
     *
     * Returns a list of invoices.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.ListInvoices
     */
    listInvoices: {
      name: "ListInvoices",
      I: ListInvoicesRequest,
      O: ListInvoicesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Apply a coupon
     *
     * Applies a coupon to the subscription.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.ApplyCoupon
     */
    applyCoupon: {
      name: "ApplyCoupon",
      I: ApplyCouponRequest,
      O: ApplyCouponResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Unapply a coupon
     *
     * Unapplies a coupon to the subscription.
     *
     * @generated from rpc salto.nebula.installation.v1.InstallationService.UnapplyCoupon
     */
    unapplyCoupon: {
      name: "UnapplyCoupon",
      I: UnapplyCouponRequest,
      O: UnapplyCouponResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

