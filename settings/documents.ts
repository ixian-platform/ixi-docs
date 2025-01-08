import { Path } from "@/lib/pageroutes"

export const Documents: Path[] = [
  {
    title: "Technical Documents",
    href: "/tech-docs",
    items: [
      {
        title: "Cryptographic Primitives",
        href: "/cryptographic-primitives",
      },
      {
        title: "Data Formats",
        href: "/data-formats",
      },
      {
        title: "Ixian DLT Whitepaper",
        href: "/ixian-dlt-whitepaper",
      },
      {
        title: "IXI Token Details",
        href: "/ixi-token-details",
      },
      {
        title: "Optional PoW - Mining",
        href: "/optional-pow-mining",
      },
      {
        title: "Programming Objects",
        href: "/programming-objects",
      },
      {
        title: "Ixian Network Protocol",
        href: "/ixian-network-protocol",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: " API Docs",
    href: "/api-docs",
    items: [
      {
        title: "Ixian Core Generic API Commands",
        href: "/ixian-core-generic-api-commands",
        items: [
          {
            title: "Add Transaction",
            href: "/add-transaction",
          },
          {
            title: "Blacklist Peer",
            href: "/blacklist-peer",
          },
          {
            title: "Get Block Height",
            href: "/get-block-height",
          },
          {
            title: "Calculate Transaction Fee",
            href: "/calculate-transaction-fee",
          },
          {
            title: "Clear Peer Blacklist",
            href: "/clear-peer-blacklist",
          },
          {
            title: "Clients",
            href: "/clients",
          },
          {
            title: "Connect",
            href: "/connect",
          },
          {
            title: "Create Raw Transaction",
            href: "/create-raw-transaction",
          },
          {
            title: "Decode Raw Transaction",
            href: "/decode-raw-transaction",
          },
          {
            title: "Generate New Address",
            href: "/generate-new-address",
          },
          {
            title: "Get Activity",
            href: "/get-activity",
          },
          {
            title: "Get Presence",
            href: "/get-presence",
          },
          {
            title: "Get Total Balance",
            href: "/get-total-balance",
          },
          {
            title: "Get Viewing Wallet",
            href: "/get-viewing-wallet",
          },
          {
            title: "Get Wallet Backup",
            href: "/get-wallet-backup",
          },
          {
            title: "Isolate",
            href: "/isolate",
          },
          {
            title: "List Wallets",
            href: "/list-wallets",
          },
          {
            title: "Load Wallet",
            href: "/load-wallet",
          },
          {
            title: "My Public Key",
            href: "/my-public-key",
          },
          {
            title: "My Wallet",
            href: "/my-wallet",
          },
          {
            title: "Pause Network Client",
            href: "/pause-network-client",
          },
          {
            title: "Reconnect",
            href: "/reconnect",
          },
          {
            title: "Resume Network Client",
            href: "/resume-network-client",
          },
          {
            title: "Send Raw Transaction",
            href: "/send-raw-transaction",
          },
          {
            title: "Servers",
            href: "/servers",
          },
          {
            title: "Shutdown",
            href: "/shutdown",
          },
          {
            title: "Sign",
            href: "/sign",
          },
          {
            title: "Sign Raw Transaction",
            href: "/sign-raw-transaction",
          },
          {
            title: "Status",
            href: "/status",
          },
          {
            title: "Unload Wallet",
            href: "/unload-wallet",
          },
          {
            title: "Validate Address",
            href: "/validate-address",
          },
          {
            title: "Verify",
            href: "/verify",
          },
          {
            title: "Extend Name Registration",
            href: "/extend-name-registration",
          },
          {
            title: "Recover Registered Name",
            href: "/recover-registered-name",
          },
          {
            title: "Register Name",
            href: "/register-name",
          },
          {
            title: "Update Name Capacity",
            href: "/update-name-capacity",
          },
          {
            title: "Update Name Records",
            href: "/update-name-records",
          },
        ],
      },
      {
        title: "Ixian DLT Specific API Commands",
        href: "/ixian-dlt-specific-api-commands",
        items: [
          {
            title: "Applied Transaction List",
            href: "/applied-transaction-list",
          },
          {
            title: "Count Node Versions",
            href: "/count-node-versions",
          },
          {
            title: "Get Balance",
            href: "/get-balance",
          },
          {
            title: "Get Best Block Hash",
            href: "/get-best-block-hash",
          },
          {
            title: "Get Block",
            href: "/get-block",
          },
          {
            title: "Get Block Count",
            href: "/get-block-count",
          },
          {
            title: "Get Full Block",
            href: "/get-full-block",
          },
          {
            title: "Get Last Blocks",
            href: "/get-last-blocks",
          },
          {
            title: "Get Mining Block",
            href: "/get-mining-block",
          },
          {
            title: "Get Transaction",
            href: "/get-transaction",
          },
          {
            title: "Get Unspent Transaction Outputs Stats",
            href: "/get-unspent-transaction-outputs-stats",
          },
          {
            title: "Get Wallet",
            href: "/get-wallet",
          },
          {
            title: "Get Wallet List",
            href: "/get-wallet-list",
          },
          {
            title: "Miner Stats",
            href: "/miner-stats",
          },
          {
            title: "Presence List",
            href: "/presence-list",
          },
          {
            title: "Rescan Blockchain",
            href: "/rescan-blockchain",
          },
          {
            title: "Set Block Selection Algorithm",
            href: "/set-block-selection-algorithm",
          },
          {
            title: "Status",
            href: "/status",
          },
          {
            title: "Submit Mining Solution",
            href: "/submit-mining-solution",
          },
          {
            title: "Supply",
            href: "/supply",
          },
          {
            title: "Transaction List",
            href: "/transaction-list",
          },
          {
            title: "Unapplied Transaction List",
            href: "/unapplied-transaction-list",
          },
          {
            title: "Verify Mining Solution",
            href: "/verify-mining-solution",
          },
          {
            title: "Get Registered Names List",
            href: "/get-registered-names-list",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "SDK Demos",
    href: "/sdk-demos",
    items: [
      {
        title: "Light Wallet",
        href: "/light-wallet",
      },
      {
        title: "Spixi Bot",
        href: "/spixi-bot",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Guides",
    href: "/guides",
    items: [
      {
        title: "Ixian DLT Guides",
        href: "/ixian-dlt-guides",
        items: [
          {
            title: "DLT Node Data Bootstrap",
            href: "/dlt-node-data-bootstrap",
          },
          {
            title: "DLT Node Configuration options",
            href: "/dlt-node-configuration-options",
          },
          {
            title: "DLT Node setup on RedHat/Centos",
            href: "/dlt-node-setup-on-redhat-centos",
          },
          {
            title: "DLT Node setup on Fedora",
            href: "/dlt-node-setup-on-fedora",
          },
          {
            title: "DLT Node setup on Ubuntu/Debian",
            href: "/dlt-node-setup-on-ubuntu-debian",
          },
          {
            title: "DLT Node setup on macOS",
            href: "/dlt-node-setup-on-macos",
          },
          {
            title: "DLT Node setup on Windows",
            href: "/dlt-node-setup-on-windows",
          },
          {
            title: "DLT Node setup on Windows (Build from source)",
            href: "/dlt-node-setup-on-windows-build-from-source",
          },
        ],
      },
      {
        title: "Ixian S2 Guides",
        href: "/ixian-s2-guides",
        items: [
          {
            title: "S2 Node setup on RedHat/Centos",
            href: "/s2-node-setup-on-redhat-centos",
          },
          {
            title: "S2 Node setup on Ubuntu/Debian",
            href: "/s2-node-setup-on-ubuntu-debian",
          },
          {
            title: "S2 Node setup on Raspberry Pi",
            href: "/s2-node-setup-on-raspberry-pi",
          },
          {
            title: "S2 Node setup on Windows",
            href: "/s2-node-setup-on-windows",
          },
        ],
      },
    ],
  },
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deep",
        href: "/deep",
        items: [
          {
            title: "Deeper",
            href: "/deeper",
            items: [
              {
                title: "Even deeper",
                href: "/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
]
