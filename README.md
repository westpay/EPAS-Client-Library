# EPAS Client Library
The EPAS Client Library is intended to greatly simply the task of ECR developers who are integrating their product with Westpay terminals.

# Background
The EPAS protocol defines a large and complex protocol for the interaction between payment terminals and ECRs. The protocol is:
* A very large protocol. The original specification document is 635 pages long.
* The EPAS specification doesn't cover all that is needed for a payment terminal solution so standards-breaking customisations are unavoidable.

* EPAS clients traditionally have to understand;
** The XML contents of the EPAS messages
** The sequencing of EPAS messages
** The rules of EPAS messages
** What messages are supported in the terminal
** What message customisations are in place in the terminal
** How to connect to the terminal and how to maintain the connection
