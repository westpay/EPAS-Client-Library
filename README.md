# EPAS Client Library
The EPAS Client Library is intended to greatly simply the task of ECR developers who are integrating their product with Westpay terminals.

# Background
The EPAS protocol defines a large and complex protocol for the interaction between payment terminals and ECRs. The protocol is:
* A very large protocol. The original specification document is 635 pages long.
* The EPAS specification doesn't cover all that is needed for a payment terminal solution so standards-breaking customisations are unavoidable.

* EPAS clients traditionally have to understand;
  * The XML contents of the EPAS messages
  * The sequencing of EPAS messages
  * The rules of EPAS messages
  * What messages are supported in the terminal
  * What message customisations are in place in the terminal
  * How to connect to the terminal and how to maintain the connection

---


# The EPAS Client Library
* .Net library, written in C#
* Allows much quicker EPAS integration
* No need to:
  * Understand XML
  * Parse message contents
  * Deal with connectivity
  * Understand customisations to the EPAS protocol
  * Handle message sequencing
* Easier for Westpay to support, compared to raw XML
* Makes Westpay terminals more attractive to integrators 

---

# But how much can it help?
## Go from this
```XML
<SaleToPOIRequest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="EpasSaleToPOIMessages.xsd">
  <MessageHeader MessageClass="Service" MessageCategory="Payment" MessageType="Request" ServiceID="3305" WorkstationID="" POIID="80000091" />
  <PaymentRequest>
    <SaleData OperatorID="">
      <SaleTransactionID TransactionID="3021" TimeStamp="2021-02-09T11:24:02.5304374+00:00" />
    </SaleData>
    <PaymentTransaction>
      <AmountsReq Currency="SEK" RequestedAmount="59" CashBackAmount="0" />
      <TransactionConditions AllowChipXpress="true" WaitCardRemoval="false" DisableTip="false" DisableBankAxept="false" />
    </PaymentTransaction>
    <PaymentData PaymentType="Normal" />
  </PaymentRequest>
</SaleToPOIRequest>

<?xml version="1.0" encoding="utf-8"?>
<SaleToPOIResponse>
  <MessageHeader ProtocolVersion="1.0" MessageClass="Service" MessageCategory="Payment" MessageType="Response" ServiceID="3305" WorkstationID="" POIID="80000091" />
  <PaymentResponse>
    <Response Result="Success" />
    <POIData>
      <POITransactionID TransactionID="000009103009" TimeStamp="2021-02-09T12:24:21.5+01:00" />
    </POIData>
    <PaymentResult PaymentType="Normal">
      <AmountsResp AuthorizedAmount="59.00" />
    </PaymentResult>
  </PaymentResponse>
</SaleToPOIResponse>
```
## To this
```C#
mEpas.Purchase(59.00, out TransactionResponse tr)
```

## View the introduction wiki to find out more
[EPAS Client Library Introduction Wiki](../../wiki)

