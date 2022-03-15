// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.


if (window.location.href.indexOf("/api/") != -1) {
	$('.toc .nav > li').toggleClass("in");
	console.log("api path");
}
if (window.location.href.indexOf("index.html") != -1) {
console.log("index");
}