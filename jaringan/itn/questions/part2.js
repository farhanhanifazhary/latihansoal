const quizData = [
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
];