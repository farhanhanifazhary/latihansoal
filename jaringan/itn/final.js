const quizData = [
        // Data dari srwe.txt
        // 33
        { question: "What is a characteristic of the LLC sublayer?", options: ["It places information in the frame that allows multiple Layer 3 protocols to use the same network interface and media.", "It provides the logical addressing required that identifies the device.", "It is responsible for media access control.", "It provides delimitation of data according to the physical signaling requirements of the medium."], answer: "It places information in the frame that allows multiple Layer 3 protocols to use the same network interface and media." },
        // 11
        { question: "What is the purpose of the Cisco IOS command “show ip interface brief”?", answers: ["to display the routing table", "to display the ARP table", "to display the status of the router interfaces and their IP addresses", "to display the MAC address table"], correct: "to display the status of the router interfaces and their IP addresses" },
        // 48
        { question: "Which command can be used on a Windows PC to see the IP configuration of that computer?", answers: ["show ip interface brief", "ping", "ipconfig", "show interfaces"], correct: "ipconfig" },
        // 32
        { question: "What is a characteristic of the UTP cabling?", answers: ["The UTP cable is not susceptible to EMI or RFI.", "The UTP cable relies on the cancellation effect produced by the twisted wire pairs to limit signal degradation.", "The UTP cable is the most expensive type of LAN cabling.", "Each pair of wires is wrapped in metallic foil."], correct: "The UTP cable relies on the cancellation effect produced by the twisted wire pairs to limit signal degradation." },
        // 142
        { question: "Which protocol is used by the traceroute command to send and receive echo-requests and echo-replies?", answers: ["ICMP", "SNMP", "Telnet", "TCP"], correct: "ICMP" },
        // 42
        { question: "Which device performs the function of determining the path that messages should take through internetworks?", answers: ["a router", "a switch", "a hub", "a DSL modem"], correct: "a router" },
        // 28
        { question: "During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?", answers: ["The logical address is added.", "The process port number is added.", "A frame is generated.", "Frames are converted to bits."], correct: "A frame is generated." },
        // 37
        { question: "What are two characteristics of IP? (Choose two.)", answers: ["does not require a dedicated end-to-end connection", "retransmits packets if they are lost", "reassembles out-of-order packets into the correct order at the destination", "operates independently of the network media", "guarantees delivery of packets"], correct: ["does not require a dedicated end-to-end connection", "operates independently of the network media"] },
        // 35
        { question: "What is an advantage of using a client-server model?", answers: ["A dedicated server is not required.", "Security is easier to manage.", "It does not require specialized network administration skills.", "All data is stored on the client devices."], correct: "Security is easier to manage." },
        // 8
        { question: "A company has a file server that provides services to the internal employees. What type of network does the company have?", answers: ["an intranet", "an extranet", "the internet", "a Moodle"], correct: "an intranet" },
        // 147
        { question: "Which type of server would use a private IP address to provide services to users within a local network?", answers: ["NTP server on the Internet", "Web server on the Internet", "File server", "Email server on the Internet"], correct: "File server" },
        // 140
        { question: "What is the purpose of having a converged network?", answers: ["to provide high speed connectivity to all end devices", "to make sure that all types of data packets will be treated equally", "to achieve fault tolerance and high availability of network infrastructure", "to reduce the cost of deploying and maintaining the communication infrastructure"], correct: "to reduce the cost of deploying and maintaining the communication infrastructure" },
        // 104
        { question: "How does a Layer 2 switch learn the MAC addresses of the devices attached to its ports?", answers: ["The switch learns MAC addresses from the source MAC address of incoming frames.", "The switch learns MAC addresses from the destination MAC address of outgoing frames.", "The switch learns MAC addresses from the ARP table.", "The switch learns MAC addresses from the IP address of the device."], correct: "The switch learns MAC addresses from the source MAC address of incoming frames." },
        // 149
        { question: "Which three blocks of addresses are defined by RFC 1918 for private network use? (Choose three.)", answers: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "169.254.0.0/16", "224.0.0.0/4", "100.64.0.0/10"], correct: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"] },
        // 14
        { question: "What is the term for splitting up a data stream into smaller pieces, and adding addressing information for delivery over a network?", answers: ["encapsulation", "segmentation", "encoding", "multiplexing"], correct: "encapsulation" },
        // 82
        { question: "What is the correct compressed format of the IPv6 address 2001:0db8:0000:0000:0000:ff00:0042:8329?", answers: ["2001:db8::ff00:42:8329", "2001:db8:0:0:0:ff00:42:8329", "2001:db8::ff00:42:8329", "2001:db8:0:0:ff00:42:8329"], correct: "2001:db8::ff00:42:8329" },
        // 49
        { question: "What is the most common type of cabling that is used in a wired Ethernet LAN?", answers: ["coaxial", "fiber-optic", "twisted-pair", "serial"], correct: "twisted-pair" },
        // 68
        { question: "What are two functions of the network layer? (Choose two.)", answers: ["directing data packets to destination hosts on other networks", "placing data on the network medium", "providing dedicated end-to-end connections", "providing end devices with a unique network identifier", "carrying data between processes that are running on source and destination hosts"], correct: ["directing data packets to destination hosts on other networks", "providing end devices with a unique network identifier"] },
        // 81
        { question: "Which type of IPv6 address is not routable and is used for communication on a single subnet?", answers: ["unique local", "link-local", "multicast", "global unicast"], correct: "link-local" },
        // 76
        { question: "Which type of physical topology can be created by connecting all Ethernet cables to a central device?", answers: ["bus", "ring", "mesh", "star"], correct: "star" },
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
        // 98
        { question: "Which layer of the OSI model is responsible for providing services such as encryption and compression?", answers: ["application", "presentation", "session", "transport"], correct: "presentation" },
        // 40
        { question: "A technician uses the `ping 127.0.0.1` command. What is the technician testing?", answers: ["the TCP/IP stack on a network host", "connectivity to a remote host", "the physical medium of the local network", "connectivity between two adjacent Cisco devices"], correct: "the TCP/IP stack on a network host" },
        // 44
        { question: "Which PDU is processed at the transport layer of the TCP/IP model?", answers: ["bit", "frame", "packet", "segment"], correct: "segment" },
        // 109
        { question: "Which two protocols operate at the application layer of the TCP/IP model? (Choose two.)", answers: ["DNS", "POP3", "TCP", "UDP", "IP"], correct: ["DNS", "POP3"] },
        // 95
        { question: "What does the term “attenuation” mean in data communication?", answers: ["strengthening of a signal by a networking device", "leakage of signals from one cable pair to another", "time for a signal to reach its destination", "loss of signal strength as distance increases"], correct: "loss of signal strength as distance increases" },
        // 151
        { question: "Which statement is true about private IP addresses?", answers: ["They are routable on the internet.", "They are meant to be used for hosts that will be publicly accessible from the Internet.", "They must be globally unique.", "They are used by most organizations to assign IP addresses to internal hosts."], correct: "They are used by most organizations to assign IP addresses to internal hosts." },
        // 38
        { question: "Which two services are provided by the transport layer? (Choose two.)", answers: ["collision detection", "error checking", "connection establishment", "encryption", "logical addressing"], correct: ["error checking", "connection establishment"] },
        // 134
        { question: "A network administrator is troubleshooting an issue and wants to verify the Layer 2 and Layer 3 addressing information on a PC. Which command should the administrator use?", answers: ["ipconfig /all", "nslookup", "tracert", "ping"], correct: "ipconfig /all" },
        // 127
        { question: "Which statement accurately describes a TCP/IP application layer protocol?", answers: ["HTTP is a connection-oriented protocol that uses TCP to transfer text, graphics, and video.", "SMTP is a connectionless protocol that uses UDP to send email messages.", "DNS is a connection-oriented protocol that uses TCP to resolve host names to IP addresses.", "DHCP is a connectionless protocol that uses UDP for a client to request an IP address from a server."], correct: "DHCP is a connectionless protocol that uses UDP for a client to request an IP address from a server." },
        // 53
        { question: "Which logical topology is used for modern Ethernet networks?", answers: ["bus", "ring", "star", "mesh"], correct: "star" },
        // 43
        { question: "What is the function of the physical layer of the OSI model?", answers: ["It transmits bits over the network media.", "It performs error detection on received frames.", "It controls access to the media.", "It determines the best path for data to take."], correct: "It transmits bits over the network media." },
        // 46
        { question: "Which layer of the TCP/IP model is responsible for formatting, compressing, and encrypting data?", answers: ["application", "presentation", "session", "transport"], correct: "application" },
        // 159
        { question: "Which type of traffic is sent to a specific group of hosts?", answers: ["broadcast", "multicast", "unicast", "anycast"], correct: "multicast" },
        // 128
        { question: "What is the default administrative distance for EIGRP?", answers: ["90", "100", "110", "120"], correct: "90" },
        // 3
        { question: "Which type of network threat is intended to prevent authorized users from accessing resources?", answers: ["DoS attacks", "access attacks", "reconnaissance attacks", "trust exploitation"], correct: "DoS attacks" },
        // 4
        { question: "A user is complaining that an external web page is taking longer than normal to load. The web page eventually loads on the user machine. Which command could the network administrator use to identify the routers that are causing a delay in the network?", answers: ["ping", "tracert", "nslookup", "ipconfig"], correct: "tracert" },
        // 121
        { question: "Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?", answers: ["Time-to-Live", "Sequence Number", "Acknowledgment Number", "Differentiated Services"], correct: "Time-to-Live" },
        // 100
        { question: "Which protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?", answers: ["TCP", "IP", "HTTP", "Ethernet"], correct: "TCP" },
        // 36
        { question: "What is a primary function of the trailer in an Ethernet frame?", answers: ["error detection", "collision detection", "source MAC address", "destination MAC address"], correct: "error detection" },
        // 154
        { question: "What is a characteristic of a global unicast IPv6 address?", answers: ["It is a public IP address that is routable on the internet.", "It is a private IP address used within a single organization.", "It is used for communication between devices on the same link.", "It identifies a group of interfaces on different devices."], correct: "It is a public IP address that is routable on the internet." },
        // 56
        { question: "What information is added during encapsulation at OSI Layer 3?", answers: ["source and destination MAC", "source and destination application protocol", "source and destination port number", "source and destination IP address"], correct: "source and destination IP address" },
        // 41
        { question: "Which scenario describes a function provided by the transport layer?", answers: ["A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.", "A student is playing a short video clip with sound. The transport layer ensures the sound and video are synchronized.", "A corporate worker is accessing a web server located on a corporate network. The transport layer formats the screen so the web page is viewable.", "A student is using a classroom VoIP phone to call home. The transport layer encodes the voice into a digital signal."], correct: "A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window." },
        // 69
        { question: "A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?", answers: ["It will send an ARP request for the MAC address of the destination device.", "It will send an ARP request for the MAC address of the default gateway.", "It will send the packet to the switch, which will add the MAC address.", "It will send a request to the DNS server for the destination MAC address."], correct: "It will send an ARP request for the MAC address of the default gateway." },
        // 23
        { question: "Which wireless security protocol is the most secure?", answers: ["WEP", "WPA", "WPA2", "WPS"], correct: "WPA2" },
        // 114
        { question: "Which feature on a switch makes it possible to connect a PC to a specific VLAN?", answers: ["trunk port", "access port", "port security", "VTP"], correct: "access port" },
        // 6
        { question: "What are two common causes of signal degradation when using UTP cabling? (Choose two.)", answers: ["improper termination", "installing cables in the ceiling", "using fiber-optic cabling in the backbone", "having a cable length that is too short", "bundling too many cables together"], correct: ["improper termination", "bundling too many cables together"] },
        // 29
        { question: "Which two layers of the OSI model have the same functions as the TCP/IP model Network Access Layer? (Choose two.)", answers: ["Data Link", "Physical", "Network", "Transport", "Session"], correct: ["Data Link", "Physical"] },
        // 34
        { question: "What type of address is 198.133.219.162?", answers: ["private", "public", "loopback", "experimental"], correct: "public" }
    ];
