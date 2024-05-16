export declare type Devices = 'window' | 'macos' | 'ubuntu' | 'android' | 'ios' | 'linux' | 'harmonyos';
export declare type Browsers = 'chrome' | 'safari' | 'firefox' | 'opera' | 'edge' | 'chrome-android' | 'firefox-android' | 'opera-android' | 'samsaung-internet' | 'webview-android';
export declare interface API {
    name: string,
    description?: string,
    experimental: boolean,
    deprecated?: boolean,
    url: string,
    mdnSource?: string,
    tested: boolean,
    supportedPlatforms?: Devices[],
    supportedBrowsers?: Browsers[]
}


export const APIs: API[] = [
    {
        name: 'Audio Output Device API',
        description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.',
        experimental: false,
        tested: false,
        url: '/test/audio-output-device-api',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API',
    },
    {
        name: 'Background Fetch API',
        description: 'The Background Fetch API provides a method for managing downloads that may take a significant amount of time such as movies, audio files, and software.',
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API'
    },
    {
        name: 'Badging API',
        description: 'The Badging API gives web developers a method of setting a badge on a document or application, to act as a notification that state has changed without displaying a more distracting notification. A common use case for this would be an application with a messaging feature displaying a badge on the app icon to show that new messages have arrived.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Beacon API',
        description: 'The Beacon API is used to send an asynchronous and non-blocking request to a web server. The request does not expect a response. Unlike requests made using XMLHttpRequest or the Fetch API, the browser guarantees to initiate beacon requests before the page is unloaded and to run them to completion.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Background Synchronization API',
        description: 'The Background Synchronization API enables a web app to defer tasks so that they can be run in a service worker once the user has a stable network connection.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Barcode Detection API',
        description: 'The Barcode Detection API detects linear and two-dimensional barcodes in images.',
        experimental: true,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Web Bluetooth API',
        description: 'The Web Bluetooth API provides the ability to connect and interact with Bluetooth Low Energy peripherals.',
        experimental: true,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Background Tasks API',
        description: 'The Cooperative Scheduling of Background Tasks API (also referred to as the Background Tasks API or the requestIdleCallback() API) provides the ability to queue tasks to be executed automatically by the user agent when it determines that there is free time to do so.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Battery Status API',
        description: `The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Broadcast Channel API',
        description: 'The Broadcast Channel API allows basic communication between browsing contexts (that is, windows, tabs, frames, or iframes) and workers on the same origin.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'CSS Counter Styles',
        description: `The CSS Counter Styles module allows to define custom counter styles, which can be used for CSS list-marker and generated-content counters.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'CSS Custom Highlight API',
        description: `The CSS Custom Highlight API provides a mechanism for styling arbitrary text ranges on a document by using JavaScript to create the ranges, and CSS to style them.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'CSS Font Loading API',
        description: 'The CSS Font Loading API provides events and interfaces for dynamically loading font resources.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'CSS Painting API',
        description: `The CSS Painting API — part of the CSS Houdini umbrella of APIs — allows developers to write JavaScript functions that can draw directly into an element's background, border, or content.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'CSS Properties and Values API',
        description: `The CSS Properties and Values API — part of the CSS Houdini umbrella of APIs — allows developers to explicitly define their CSS custom properties, allowing for property type checking, default values, and properties that do or do not inherit their value.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'CSS Typed Object Model API',
        description: `The CSS Typed Object Model API simplifies CSS property manipulation by exposing CSS values as typed JavaScript objects rather than strings. This not only simplifies CSS manipulation, but also lessens the negative impact on performance as compared to HTMLElement.style.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'CSS Object Model (CSSOM)',
        description: `The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Canvas API',
        description: `The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Channel Messaging API',
        description: `The Channel Messaging API allows two separate scripts running in different browsing contexts attached to the same document (e.g., two IFrames, or the main document and an IFrame, two documents via a SharedWorker, or two workers) to communicate directly, passing messages between one another through two-way channels (or pipes) with a port at each end.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Clipboard API',
        description: `The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste), as well as to asynchronously read from and write to the system clipboard.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API'
    },
    {
        name: 'Compression Streams API',
        description: 'The Compression Streams API provides a JavaScript API for compressing and decompressing streams of data using the gzip or deflate formats.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Compute Pressure API',
        description: 'The Compute Pressure API is a JavaScript API that enables you to observe the pressure of system resources such as the CPU.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Console API',
        description: 'The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Contact Picker API',
        description: 'The Contact Picker API allows users to select entries from their contact list and share limited details of the selected entries with a website or application.',
        experimental: true,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Content Index API',
        description: 'The Content Index API allows developers to register their offline enabled content with the browser.',
        experimental: true,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Cookie Store API',
        description: `The Cookie Store API is an asynchronous API for managing cookies, available in windows and also service workers.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: ''
    },
    {
        name: 'Credential Management API',
        description: `The Credential Management API lets a website store and retrieve password, public key, and federated credentials. These capabilities allow users to sign in without typing passwords, see the federated account they used to sign in to a site, and resume a session without the explicit sign-in flow of an expired session.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API'
    },
    {
        name: 'Document Object Model (DOM)',
        description: `The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model'
    },
    {
        name: 'Device Memory API',
        description: `The capabilities of a client device largely depend on the amount of available RAM. Traditionally, developers had to use heuristics and either benchmark a device or infer device capabilities based on other factors like the device manufacturer or User Agent strings.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API'
    },
    {
        name: 'Device orientation events',
        description: `Device orientation events are events that allow you to detect a device's physical orientation, as well as allowing you to detect the device's motion.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events'
    },
    {
        name: 'Document Picture-in-Picture API',
        description: `The Document Picture-in-Picture API makes it possible to open an always-on-top window that can be populated with arbitrary HTML content — for example a video with custom controls or a set of streams showing the participants of a video conference call. It extends the earlier Picture-in-Picture API for <video>, which specifically enables an HTML <video> element to be put into an always-on-top window.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API'
    },
    {
        name: 'EditContext API',
        description: `The EditContext API can be used to build rich text editors on the web that support advanced text input experiences, such as Input Method Editor (IME) composition, emoji picker, or any other platform-specific editing-related UI surfaces.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/EditContext_API'
    },
    {
        name: 'Encoding API',
        description: `The Encoding API provides a mechanism for handling text in various character encodings, including legacy non-UTF-8 encodings.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API'
    },
    {
        name: 'Encrypted Media Extensions API',
        description: `The Encrypted Media Extensions API provides interfaces for controlling the playback of content which is subject to a digital restrictions management scheme.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API'
    },
    {
        name: 'EyeDropper API',
        description: `The EyeDropper API provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens, including outside of the browser window.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API'
    },
    {
        name: `Federated Credential Management (FedCM) API`,
        description: `The Federated Credential Management API (or FedCM API) provides a standard mechanism for identity providers (IdPs) to make identity federation services available on the web in a privacy-preserving way, without the need for third-party cookies and redirects. This includes a JavaScript API that enables the use of federated authentication for activities such as signing in or signing up on a website`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/FedCM_API'
    },
    {
        name: 'Fenced Frame API',
        description: 'The Fenced Frame API provides functionality for controlling content embedded in <fencedframe> elements.',
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API'
    },
    {
        name: 'Fetch API',
        description: `The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
    },
    {
        name: 'File API',
        description: `The File API enables web applications to access files and their contents.
    Web applications can access files when the user makes them available, either using a file <input> element or via drag and drop.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API'
    },
    {
        name: 'File System API',
        description: 'The File System API — with extensions provided via the File System Access API to access files on the device file system — allows read, write and file management capabilities.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API'
    },
    {
        name: 'File and Directory Entries API',
        description: `The File and Directory Entries API simulates a local file system that web apps can navigate within and access files in. You can develop apps which read, write, and create files and/or directories in a virtual, sandboxed file system.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API'
    },
    {
        name: 'Force Touch events',
        description: 'Force Touch Events are a proprietary, Apple-specific feature which makes possible (where supported by the input hardware) new interactions based on how hard the user clicks or presses down on the touchscreen or trackpad.',
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Force_Touch_events',
        supportedPlatforms: ['ios', 'macos', 'android'],
    },
    {
        name: 'Fullscreen API',
        description: `The Fullscreen API adds methods to present a specific Element (and its descendants) in fullscreen mode, and to exit fullscreen mode once it is no longer needed. This makes it possible to present desired content—such as an online game—using the user's entire screen, removing all browser user interface elements and other applications from the screen until fullscreen mode is shut off.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API'
    },
    {
        name: 'Gamepad API',
        description: `The Gamepad API is a way for developers to access and respond to signals from gamepads and other game controllers in a simple, consistent way. It contains three interfaces, two events and one specialist function, to respond to gamepads being connected and disconnected, and to access other information about the gamepads themselves, and what buttons and other controls are currently being pressed.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API'
    },
    {
        name: 'Geolocation API',
        description: `The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API'
    },
    {
        name: 'The HTML DOM API',
        description: `The HTML DOM API is made up of the interfaces that define the functionality of each of the elements in HTML, as well as any supporting types and interfaces they rely upon.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API',
    },
    {
        name: 'HTML Drag and Drop API',
        description: `HTML Drag and Drop interfaces enable applications to use drag-and-drop features in browsers.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API'
    },
    {
        name: 'HTML Sanitizer API',
        description: `The HTML Sanitizer API allow developers to take untrusted strings of HTML and Document or DocumentFragment objects, and sanitize them for safe insertion into a document's DOM.`,
        deprecated: true,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API'
    },
    {
        name: 'History API',
        description: `The History API provides access to the browser's session history (not to be confused with WebExtensions history) through the history global object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API'
    },
    {
        name: 'Houdini APIs',
        description: `Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser's rendering engine. Houdini is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browsers.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Houdini_APIs'
    },
    {
        name: 'Idle Detection API',
        description: `The Idle Detection API provides a means to detect the user's idle status, active, idle, and locked, specifically, and to be notified of changes to idle status without polling from a script.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Idle_Detection_API'
    },
    {
        name: 'MediaStream Image Capture API',
        description: `The MediaStream Image Capture API is an API for capturing images or videos from a photographic device. In addition to capturing data, it also allows you to retrieve information about device capabilities such as image size, red-eye reduction and whether or not there is a flash and what they are currently set to. Conversely, the API allows the capabilities to be configured within the constraints what the device allows.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API'
    },
    {
        name: 'IndexedDB API',
        description: `IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution. This is the main landing page for MDN's IndexedDB coverage — here we provide links to the full API reference and usage guides, browser support details, and some explanation of key concepts.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API'
    },
    {
        name: 'Ink API',
        description: 'The Ink API allows browsers to directly make use of available OS-level compositors when drawing pen strokes in an inking app feature, thereby reducing latency and increasing performance.',
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Ink_API'
    },
    {
        name: 'InputDeviceCapabilities API',
        description: `The InputDeviceCapabilities API provides details about the underlying sources of input events. The API attempts to describe how the device behaves rather than what it is. For example, the first version of the API indicates whether a device fires touch events rather than whether it is a touch screen.        `,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceCapabilities_API'
    },
    {
        name: 'Insertable Streams for MediaStreamTrack API',
        description: `The Insertable Streams for MediaStreamTrack API provides a method of adding new components to a MediaStreamTrack.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API'
    },
    {
        name: 'Intersection Observer API',
        description: `The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
    },
    {
        name: 'Keyboard API',
        description: `The Keyboard API provides methods for working with a physical keyboard that is attached to a device running a browser.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Keyboard_API'
    },
    {
        name: 'Launch Handler API',
        description: `The Launch Handler API allows developers to control how a progressive web app (PWA) is launched — for example if it uses an existing window or creates a new one, and how the app's target launch URL is handled.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Launch_Handler_API'
    },
    {
        name: 'Local Font Access API',
        description: `The Local Font Access API provides a mechanism to access the user's locally installed font data — this includes higher-level details such as names, styles, and families, as well as the raw bytes of the underlying font files.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Local_Font_Access_API'
    },
    {
        name: 'Media Capabilities API',
        description: `The Media Capabilities API allows developers to determine decoding and encoding abilities of the device, exposing information such as whether media is supported and whether playback should be smooth and power efficient, with real time feedback about playback to better enable adaptive streaming, and access to display property information.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API'
    },
    {
        name: 'Media Capture and Streams API (Media Stream)',
        description: `The Media Capture and Streams API, often called the Media Streams API or MediaStream API, is an API related to WebRTC which provides support for streaming audio and video data.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API'
    },
    {
        name: 'Media Session API',
        description: `The Media Session API provides a way to customize media notifications. It does this by providing metadata for display by the user agent for the media your web app is playing.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API'
    },
    {
        name: 'Media Source API',
        description: `The Media Source API, formally known as Media Source Extensions (MSE), provides functionality enabling plugin-free web-based streaming media. Using MSE, media streams can be created via JavaScript, and played using <audio> and <video> elements.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
    },
    {
        name: 'MediaStream Recording API',
        description: `The MediaStream Recording API, sometimes referred to as the Media Recording API or the MediaRecorder API, is closely affiliated with the Media Capture and Streams API and the WebRTC API. The MediaStream Recording API makes it possible to capture the data generated by a MediaStream or HTMLMediaElement object for analysis, processing, or saving to disk. It's also surprisingly easy to work with.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API'
    },
    {
        name: 'Navigation API',
        description: `The Navigation API provides the ability to initiate, intercept, and manage browser navigation actions. It can also examine an application's history entries. This is a successor to previous web platform features such as the History API and window.location, which solves their shortcomings and is specifically aimed at the needs of single-page applications (SPAs).`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API'
    },
    {
        name: 'Network Information API',
        description: `The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi, 'cellular', etc.). This can be used to select high definition content or low definition content based on the user's connection.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API'
    },
    {
        name: 'Page Visibility API',
        description: `The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API'
    },
    {
        name: 'Payment Handler API',
        description: `The Payment Handler API provides a standardized set of functionality for web applications to directly handle payments, rather than having to be redirected to a separate site for payment handling.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Handler_API'
    },
    {
        name: 'Payment Request API',
        description: `The Payment Request API provides a consistent user experience for merchants and users. It is not a new way of paying for things; instead, it's a way for users to select their preferred way of paying for things and make that information available to a merchant.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API'
    },
    {
        name: 'Performance APIs',
        description: `The Performance API is a group of standards used to measure the performance of web applications.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API'
    },
    {
        name: 'Web Periodic Background Synchronization API',
        description: `The Web Periodic Background Synchronization API provides a way to register tasks to be run in a service worker at periodic intervals with network connectivity. These tasks are referred to as periodic background sync requests.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API'
    },
    {
        name: 'Permissions API',
        description: `The Permissions API provides a consistent programmatic way to query the status of API permissions attributed to the current context. For example, the Permissions API can be used to determine if permission to access a particular API has been granted or denied, or requires specific user permission.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API'
    },
    {
        name: 'Picture-in-Picture API',
        description: `The Picture-in-Picture API allow websites to create a floating, always-on-top video window. This allows users to continue consuming media while they interact with other sites or applications on their device.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API'
    },
    {
        name: 'Pointer events',
        description: `Much of today's web content assumes the user's pointing device will be a mouse. However, since many devices support other types of pointing input devices, such as pen/stylus and touch surfaces, extensions to the existing pointing device event models are needed. Pointer events address that need.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events'
    },
    {
        name: 'Pointer Lock API',
        description: `The Pointer Lock API (formerly called Mouse Lock API) provides input methods based on the movement of the mouse over time (i.e., deltas), not just the absolute position of the mouse cursor in the viewport. It gives you access to raw mouse movement, locks the target of mouse events to a single element, eliminates limits on how far mouse movement can go in a single direction, and removes the cursor from view. It is ideal for first-person 3D games, for example.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API'
    },
    {
        name: 'Popover API',
        description: `The Popover API provides developers with a standard, consistent, flexible mechanism for displaying popover content on top of other page content. Popover content can be controlled either declaratively using HTML attributes, or via JavaScript.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API'
    },
    {
        name: 'Presentation API',
        description: `The Presentation API lets a user agent (such as a Web browser) effectively display web content through large presentation devices such as projectors and network-connected televisions. Supported types of multimedia devices include both displays which are wired using HDMI, DVI, or the like, or wireless, using DLNA, Chromecast, AirPlay, or Miracast.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API'
    },
    {
        name: 'Prioritized Task Scheduling API',
        description: `The Prioritized Task Scheduling API provides a standardized way to prioritize all tasks belonging to an application, whether they are defined in a website developer's code or in third-party libraries and frameworks.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API'
    },
    {
        name: 'Push API',
        description: `The Push API gives web applications the ability to receive messages pushed to them from a server, whether or not the web app is in the foreground, or even currently loaded, on a user agent. This lets developers deliver asynchronous notifications and updates to users that opt in, resulting in better engagement with timely new content.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Push_API'
    },
    {
        name: 'Remote Playback API',
        description: `The Remote Playback API extends the HTMLMediaElement to enable the control of media played on a remote device.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Remote_Playback_API'
    },
    {
        name: 'Reporting API',
        description: `The Reporting API provides a generic reporting mechanism for web applications to use to make reports available based on various platform features (for example Content Security Policy, Permissions-Policy, or feature deprecation reports) in a consistent manner.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Reporting_API'
    },
    {
        name: 'Resize Observer API',
        description: `The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size, with notifications being delivered to the observer each time the size changes.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API'
    },
    {
        name: 'SVG API',
        description: `SVG provides elements for circles, rectangles, and simple and complex curves. The elements' attribute values specify how these must be drawn. The SVG API is the subset of the DOM connecting these SVG elements and their attribute values to scripts or programming languages by representing them in memory. The SVG API thus provides methods that allow programmatic access to the SVG elements and their attribute values.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/SVG_API'
    },
    {
        name: 'Screen Capture API',
        description: `The Screen Capture API introduces additions to the existing Media Capture and Streams API to let the user select a screen or portion of a screen (such as a window) to capture as a media stream. This stream can then be recorded or shared with others over the network.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API'
    },
    {
        name: 'Screen Orientation API',
        description: `The Screen Orientation API provides information about the orientation of the screen.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API'
    },
    {
        name: 'Screen Wake Lock API',
        description: `The Screen Wake Lock API provides a way to prevent devices from dimming or locking the screen when an application needs to keep running.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API'
    },
    {
        name: 'Selection API',
        description: `The Selection API enables developers to access and manipulate the portion of a document selected by the user.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Selection_API'
    },
    {
        name: 'Sensor APIs',
        description: `The Sensor APIs are a set of interfaces built to a common design that expose device sensors in a consistent way to the web platform.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs'
    },
    {
        name: 'Server-sent events',
        description: `Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as Events + data inside the web page.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events'
    },
    {
        name: 'Service Worker API',
        description: `Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'
    },
    {
        name: 'Shared Storage API',
        description: `The Shared Storage API is a client-side storage mechanism that enables unpartitioned, cross-site data access while preserving privacy (i.e. without relying on tracking cookies).`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API'
    },
    {
        name: 'Speculation Rules API',
        description: `The Speculation Rules API is designed to improve performance for future navigations. It targets document URLs rather than specific resource files, and so makes sense for multi-page applications (MPAs) rather than single-page applications (SPAs).`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API'
    },
    {
        name: 'Storage API',
        description: `The Storage Standard defines a shared storage system designed to be used by all APIs and technologies that websites can use to store data in a user's browser.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API'
    },
    {
        name: 'Storage Access API',
        description: `The Storage Access API provides a way for cross-site content loaded in a third-party context (i.e., embedded in an <iframe>) to gain access to third-party cookies that it would typically only have access to in a first-party context (i.e., when loaded directly in a browser tab).`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API'
    },
    {
        name: 'Streams API',
        description: `The Streams API allows JavaScript to programmatically access streams of data received over the network and process them as desired by the developer.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API'
    },
    {
        name: 'Topics API',
        description: `The Topics API provides a mechanism for developers to implement use cases such as interest-based advertising (IBA) based on topics collected by the browser as the user navigates different pages, rather than collected by the developer by tracking the user's journey around different sites with third-party cookies.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Topics_API'
    },
    {
        name: 'Touch events',
        description: `To provide quality support for touch-based user interfaces, touch events offer the ability to interpret finger (or stylus) activity on touch screens or trackpads.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch_events'
    },
    {
        name: 'Trusted Types API',
        description: `The Trusted Types API gives web developers a way to lock down the insecure parts of the DOM API to prevent client-side Cross-site scripting (XSS) attacks.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API'
    },
    {
        name: 'UI Events',
        description: `The UI Events API defines a system for handling user interactions such as mouse and keyboard input.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events'
    },
    {
        name: 'URL API',
        description: `The URL API is a component of the URL standard, which defines what constitutes a valid Uniform Resource Locator and the API that accesses and manipulates URLs. The URL standard also defines concepts such as domains, hosts, and IP addresses, and also attempts to describe in a standard way the legacy application/x-www-form-urlencoded MIME type used to submit web forms' contents as a set of key/value pairs.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_API'
    },
    {
        name: 'URL Pattern API',
        description: `The URL Pattern API defines a syntax that is used to create URL pattern matchers. These patterns can be matched against URLs or individual URL components. The URL Pattern API is used by the URLPattern interface.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API'
    },
    {
        name: 'User-Agent Client Hints API',
        description: `The User-Agent Client Hints API extends Client Hints to provide a way of exposing browser and platform information via User-Agent response and request headers, and a JavaScript API.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API'
    },
    {
        name: 'Vibration API',
        description: `Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake. The Vibration API offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn't support it.`,
        experimental: false,
        tested: false,
        url: '/test/viberation-api',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API'
    },
    {
        name: 'View Transitions API',
        description: `The View Transitions API provides a mechanism for easily creating animated transitions between different DOM states while also updating the DOM contents in a single step.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API'
    },
    {
        name: 'VirtualKeyboard API',
        description: `The VirtualKeyboard API provides developers control over the layout of their applications when the on-screen virtual keyboard appears and disappears on devices such as tablets, mobile phones, or other devices where a hardware keyboard may not be available.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard_API'
    },
    {
        name: 'Visual Viewport API',
        description: `The Visual Viewport API provides an explicit mechanism for querying and modifying the properties of the window's visual viewport. The visual viewport is the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API'
    },
    {
        name: 'Web Animations API',
        description: `The Web Animations API allows for synchronizing and timing changes to the presentation of a Web page, i.e. animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API'
    },
    {
        name: 'Web Audio API',
        description: `The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'
    },
    {
        name: 'Web Authentication API',
        description: `The Web Authentication API (WebAuthn) is an extension of the Credential Management API that enables strong authentication with public key cryptography, enabling passwordless authentication and secure multi-factor authentication (MFA) without SMS texts.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API'
    },
    {
        name: 'Web Components',
        description: `Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components'
    },
    {
        name: 'Web Crypto API',
        description: `The Web Crypto API is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API'
    },
    {
        name: 'Notifications API',
        description: `The Notifications API allows web pages to control the display of system notifications to the end user. These are outside the top-level browsing context viewport, so therefore can be displayed even when the user has switched tabs or moved to a different app. The API is designed to be compatible with existing notification systems, across different platforms.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API'
    },
    {
        name: 'Web Serial API',
        description: `The Web Serial API provides a way for websites to read from and write to serial devices. These devices may be connected via a serial port, or be USB or Bluetooth devices that emulate a serial port.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API'
    },
    {
        name: 'Web Share API',
        description: `The Web Share API provides a mechanism for sharing text, links, files, and other content to an arbitrary share target selected by the user.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API'
    },
    {
        name: 'Web Speech API',
        description: `The Web Speech API enables you to incorporate voice data into web apps. The Web Speech API has two parts: SpeechSynthesis (Text-to-Speech), and SpeechRecognition (Asynchronous Speech Recognition.)`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API'
    },
    {
        name: 'Web Storage API',
        description: `The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API'
    },
    {
        name: 'Web Workers API',
        description: `Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API'
    },
    {
        name: 'WebCodecs API',
        description: `The WebCodecs API gives web developers low-level access to the individual frames of a video stream and chunks of audio. It is useful for web applications that require full control over the way media is processed. For example, video or audio editors, and video conferencing.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API'
    },
    {
        name: 'WebRTC API',
        description: `WebRTC (Web Real-Time Communication) is a technology that enables Web applications and sites to capture and optionally stream audio and/or video media, as well as to exchange arbitrary data between browsers without requiring an intermediary. The set of standards that comprise WebRTC makes it possible to share data and perform teleconferencing peer-to-peer, without requiring that the user install plug-ins or any other third-party software.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API'
    },
    {
        name: 'The WebSocket API (WebSockets)',
        description: `The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'
    },
    {
        name: 'WebUSB API',
        description: `The WebUSB API provides a way to expose non-standard Universal Serial Bus (USB) compatible devices services to the web, to make USB safer and easier to use.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API'
    },
    {
        name: 'WebVR API',
        description: `WebVR provides support for exposing virtual reality devices — for example, head-mounted displays like the Oculus Rift or HTC Vive — to web apps, enabling developers to translate position and movement information from the display into movement around a 3D scene. This has numerous, interesting applications, from virtual product tours and interactive training apps to immersive first-person games.`,
        deprecated: true,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API'
    },
    {
        name: 'Web Video Text Tracks Format (WebVTT)',
        description: `Web Video Text Tracks Format (WebVTT) is a format for displaying timed text tracks (such as subtitles or captions) using the <track> element. The primary purpose of WebVTT files is to add text overlays to a <video>. WebVTT is a text based format, which must be encoded using UTF-8. Where you can use spaces you can also use tabs. There is also a small API available to represent and manage these tracks and the data needed to perform the playback of the text at the correct times.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API'
    },
    {
        name: 'WebXR Device API',
        description: `WebXR is a group of standards which are used together to support rendering 3D scenes to hardware designed for presenting virtual worlds (virtual reality, or VR), or for adding graphical imagery to the real world, (augmented reality, or AR). The WebXR Device API implements the core of the WebXR feature set, managing the selection of output devices, render the 3D scene to the chosen device at the appropriate frame rate, and manage motion vectors created using input controllers.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API'
    },
    {
        name: 'Window Controls Overlay API',
        description: `The Window Controls Overlay API gives Progressive Web Apps installed on desktop operating systems the ability to hide the default window title bar and display their own content over the full surface area of the app window, turning the control buttons (maximize, minimize, and close) into an overlay.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Window_Controls_Overlay_API'
    },
    {
        name: 'Window Management API',
        description: `The Window Management API allows you to get detailed information on the displays connected to your device and more easily place windows on specific screens, paving the way towards more effective multi-screen applications.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API'
    },
    {
        name: 'Web Locks API',
        description: `The Web Locks API allows scripts running in one tab or worker to asynchronously acquire a lock, hold it while work is performed, then release it. While held, no other script executing in the same origin can acquire the same lock, which allows a web app running in multiple tabs or workers to coordinate work and the use of resources.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API'
    },
    {
        name: 'Web MIDI API',
        description: `The Web MIDI API connects to and interacts with Musical Instrument Digital Interface (MIDI) Devices.`,
        experimental: false,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API'
    },
    {
        name: 'Web NFC API',
        description: `The Web NFC API allows exchanging data over NFC via light-weight NFC Data Exchange Format (NDEF) messages.`,
        experimental: true,
        tested: false,
        url: '',
        mdnSource: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API'
    }
]




const test: API = {
    name: '',
    description: ``,
    experimental: false,
    tested: false,
    url: '',
    mdnSource: ''
}