const quizData = [
    // 157
    { question: "Which subnet mask would be used for the 172.30.0.0 network to provide 254 usable host addresses per subnet?", answers: ["255.255.255.0", "255.255.0.0", "255.255.254.0", "255.255.248.0"], correct: "255.255.255.0" },
    // 45
    { question: "Which layer of the TCP/IP model provides a route to forward messages through an internetwork?", answers: ["transport", "application", "network access", "internet"], correct: "internet" },
    // 137
    { question: "What is the function of a router?", answers: ["It controls the flow of data via the use of Layer 2 addresses.", "It determines the best path to send packets.", "It increases the size of the broadcast domain.", "It connects multiple IP networks."], correct: "It determines the best path to send packets." },
    // 87
    { question: "What are two benefits of using a layered network model? (Choose two.)", answers: ["It assists in protocol design.", "It speeds up packet delivery.", "It prevents technology in one layer from affecting other layers.", "It ensures a device on one layer can communicate with a device on another layer."], correct: ["It assists in protocol design.", "It prevents technology in one layer from affecting other layers."] },
    // 47
    { question: "What is the purpose of the transport layer?", answers: ["to control the conversations between processes on source and destination hosts", "to forward packets to their destination in the most efficient way", "to encapsulate IP packets into frames", "to encode the data into a series of bits"], correct: "to control the conversations between processes on source and destination hosts" },
    // 18
    { question: "What is a characteristic of a peer-to-peer network?", answers: ["easy to secure", "scalable", "one-way data flow", "decentralized resources"], correct: "decentralized resources" },
    // 78
    { question: "What are the three main components of the physical layer? (Choose three.)", answers: ["signaling method", "physical components", "encoding", "framing", "MAC addressing"], correct: ["signaling method", "physical components", "encoding"] },
    // 156
    { question: "Which two statements are correct about MAC and IP addresses? (Choose two.)", answers: ["A MAC address is a Layer 2 address that is used for local delivery of frames.", "An IP address is a Layer 3 address that is used for delivery of packets to a final destination.", "MAC addresses are used to identify a specific process running on a host.", "IP addresses are never used for local delivery."], correct: ["A MAC address is a Layer 2 address that is used for local delivery of frames.", "An IP address is a Layer 3 address that is used for delivery of packets to a final destination."] },
    // 112
    { question: "Which switching method drops frames that fail the FCS check?", answers: ["store-and-forward", "cut-through", "borderless", "ingress port"], correct: "store-and-forward" },
    // 39
    { question: "Which statement is true about the TCP and UDP protocols?", answers: ["TCP is a connectionless protocol and UDP is a connection-oriented protocol.", "TCP uses a three-way handshake to establish a session.", "UDP provides guaranteed delivery of datagrams.", "TCP uses port numbers only on the server."], correct: "TCP uses a three-way handshake to establish a session." },
];