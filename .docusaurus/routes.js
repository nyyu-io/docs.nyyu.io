import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '775'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '08f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '49d'),
            routes: [
              {
                path: '/docs/affiliate-system',
                component: ComponentCreator('/docs/affiliate-system', '2c9'),
                exact: true
              },
              {
                path: '/docs/api/Auction/Auction Summary',
                component: ComponentCreator('/docs/api/Auction/Auction Summary', '223'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Check Rounds',
                component: ComponentCreator('/docs/api/Auction/Check Rounds', '2a3'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Create New Auction Round',
                component: ComponentCreator('/docs/api/Auction/Create New Auction Round', 'a6b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Get All Auction Rounds',
                component: ComponentCreator('/docs/api/Auction/Get All Auction Rounds', 'c7d'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Get Auction By Status',
                component: ComponentCreator('/docs/api/Auction/Get Auction By Status', 'ce3'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Get Auction Round by Id',
                component: ComponentCreator('/docs/api/Auction/Get Auction Round by Id', '4d2'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Get Auction Round By Number',
                component: ComponentCreator('/docs/api/Auction/Get Auction Round By Number', '788'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Get Current Round',
                component: ComponentCreator('/docs/api/Auction/Get Current Round', 'a47'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Auction/Update Existing Auction Round',
                component: ComponentCreator('/docs/api/Auction/Update Existing Auction Round', 'ec4'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Avatar Summary',
                component: ComponentCreator('/docs/api/Avatar/Avatar Summary', '2b6'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Create Avatar Component',
                component: ComponentCreator('/docs/api/Avatar/Create Avatar Component', 'cb6'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Create New Avatar Profile',
                component: ComponentCreator('/docs/api/Avatar/Create New Avatar Profile', '3ad'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Get Avatar By ID',
                component: ComponentCreator('/docs/api/Avatar/Get Avatar By ID', 'dda'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Get Avatar By Name',
                component: ComponentCreator('/docs/api/Avatar/Get Avatar By Name', 'ea4'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Get Avatar Components',
                component: ComponentCreator('/docs/api/Avatar/Get Avatar Components', '012'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Get Avatar Components By Sets',
                component: ComponentCreator('/docs/api/Avatar/Get Avatar Components By Sets', 'cce'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Get Avatar Profiles',
                component: ComponentCreator('/docs/api/Avatar/Get Avatar Profiles', 'e7c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Get Components By Group',
                component: ComponentCreator('/docs/api/Avatar/Get Components By Group', 'd83'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Update Avatar Component',
                component: ComponentCreator('/docs/api/Avatar/Update Avatar Component', 'ee6'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Avatar/Update Avatar Profile',
                component: ComponentCreator('/docs/api/Avatar/Update Avatar Profile', 'f82'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Bid Summary',
                component: ComponentCreator('/docs/api/Bid/Bid Summary', 'dc4'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Close Bid',
                component: ComponentCreator('/docs/api/Bid/Close Bid', '3ee'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Get Bid',
                component: ComponentCreator('/docs/api/Bid/Get Bid', '428'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Get Bid By Admin',
                component: ComponentCreator('/docs/api/Bid/Get Bid By Admin', '9be'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Get Bid List By Admin',
                component: ComponentCreator('/docs/api/Bid/Get Bid List By Admin', '354'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Get Bid List By Round ID',
                component: ComponentCreator('/docs/api/Bid/Get Bid List By Round ID', '792'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Get Bid List by Round Number',
                component: ComponentCreator('/docs/api/Bid/Get Bid List by Round Number', 'c1e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Get Bid List By User',
                component: ComponentCreator('/docs/api/Bid/Get Bid List By User', '072'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Increase an Existing Bid',
                component: ComponentCreator('/docs/api/Bid/Increase an Existing Bid', '1f8'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Place a New Bid',
                component: ComponentCreator('/docs/api/Bid/Place a New Bid', '03f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Bid/Update an Existing Bid',
                component: ComponentCreator('/docs/api/Bid/Update an Existing Bid', '96b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Change Show Status',
                component: ComponentCreator('/docs/api/Deposit/Change Show Status', 'f9a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Confirm Bank Deposit by Admin',
                component: ComponentCreator('/docs/api/Deposit/Confirm Bank Deposit by Admin', '43b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Confirm PayPal Checkout Order',
                component: ComponentCreator('/docs/api/Deposit/Confirm PayPal Checkout Order', '196'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Create Bank Deposit Request',
                component: ComponentCreator('/docs/api/Deposit/Create Bank Deposit Request', 'd90'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Create Crypto Payment for Deposit Into the Wallet',
                component: ComponentCreator('/docs/api/Deposit/Create Crypto Payment for Deposit Into the Wallet', 'c7f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Create PayPal Payment for Deposit Into the Wallet',
                component: ComponentCreator('/docs/api/Deposit/Create PayPal Payment for Deposit Into the Wallet', '27b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Create Stripe Payment for Deposit Into the Wallet',
                component: ComponentCreator('/docs/api/Deposit/Create Stripe Payment for Deposit Into the Wallet', 'bde'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Create Stripe payment with Saved Card for Deposit',
                component: ComponentCreator('/docs/api/Deposit/Create Stripe payment with Saved Card for Deposit', 'd64'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Deposit/Viewing Deposit Transactions',
                component: ComponentCreator('/docs/api/Deposit/Viewing Deposit Transactions', '6b7'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Notification/Add New Notification Type',
                component: ComponentCreator('/docs/api/Notification/Add New Notification Type', '9ad'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Notification/Get All Notification Types',
                component: ComponentCreator('/docs/api/Notification/Get All Notification Types', '503'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Notification/Get All Unread Notifications',
                component: ComponentCreator('/docs/api/Notification/Get All Unread Notifications', '428'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Notification/Get Notifications with Offset and Limit',
                component: ComponentCreator('/docs/api/Notification/Get Notifications with Offset and Limit', '18f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Notification/Notification Summary',
                component: ComponentCreator('/docs/api/Notification/Notification Summary', '114'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Notification/Set Notification Read',
                component: ComponentCreator('/docs/api/Notification/Set Notification Read', '550'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Orders/Get All Newly Placed Orders In A Presale Round',
                component: ComponentCreator('/docs/api/Presale Orders/Get All Newly Placed Orders In A Presale Round', '705'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Orders/Get All Presale Orders In A Specific Presale Round',
                component: ComponentCreator('/docs/api/Presale Orders/Get All Presale Orders In A Specific Presale Round', '8c1'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Orders/Get Presale Order By ID',
                component: ComponentCreator('/docs/api/Presale Orders/Get Presale Order By ID', '4a9'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Orders/Get Presale Order Transactions',
                component: ComponentCreator('/docs/api/Presale Orders/Get Presale Order Transactions', '6e0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Orders/Get Presale Orders By User',
                component: ComponentCreator('/docs/api/Presale Orders/Get Presale Orders By User', '4f7'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Orders/Place A New Presale Order',
                component: ComponentCreator('/docs/api/Presale Orders/Place A New Presale Order', '157'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Adding New Coin',
                component: ComponentCreator('/docs/api/Presale Payment/Adding New Coin', '2d8'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Capture Paypal Order For Presale',
                component: ComponentCreator('/docs/api/Presale Payment/Capture Paypal Order For Presale', '338'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Delete a Coin',
                component: ComponentCreator('/docs/api/Presale Payment/Delete a Coin', 'aff'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Get Coins',
                component: ComponentCreator('/docs/api/Presale Payment/Get Coins', '4c2'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Get Crypto Transactions for Presale Orders',
                component: ComponentCreator('/docs/api/Presale Payment/Get Crypto Transactions for Presale Orders', '978'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Get Cryptocurrency Price',
                component: ComponentCreator('/docs/api/Presale Payment/Get Cryptocurrency Price', '6f6'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Get PayPal Transactions for Presale Orders',
                component: ComponentCreator('/docs/api/Presale Payment/Get PayPal Transactions for Presale Orders', 'fc0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Get Stripe Transaction for Presale Orders',
                component: ComponentCreator('/docs/api/Presale Payment/Get Stripe Transaction for Presale Orders', 'a6a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Pay For Presale In Crypto Currency',
                component: ComponentCreator('/docs/api/Presale Payment/Pay For Presale In Crypto Currency', '995'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Pay For Presale Order With Nyyu Wallet',
                component: ComponentCreator('/docs/api/Presale Payment/Pay For Presale Order With Nyyu Wallet', '2fb'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Pay for presale with PayPal',
                component: ComponentCreator('/docs/api/Presale Payment/Pay for presale with PayPal', '99b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Pay for presale with Stripe',
                component: ComponentCreator('/docs/api/Presale Payment/Pay for presale with Stripe', '90f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Pay For Presale with Stripe Saved Card',
                component: ComponentCreator('/docs/api/Presale Payment/Pay For Presale with Stripe Saved Card', '47c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Place a New Presale Order',
                component: ComponentCreator('/docs/api/Presale Payment/Place a New Presale Order', '5f1'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale Payment/Presale Payment Summary',
                component: ComponentCreator('/docs/api/Presale Payment/Presale Payment Summary', '92e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale/Create New Presale',
                component: ComponentCreator('/docs/api/Presale/Create New Presale', '473'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale/Get Presales',
                component: ComponentCreator('/docs/api/Presale/Get Presales', '993'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Presale/Get Presales by Status',
                component: ComponentCreator('/docs/api/Presale/Get Presales by Status', '57b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Profile/Set Avatar',
                component: ComponentCreator('/docs/api/Profile/Set Avatar', 'f96'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Profile/Update Avatar Set',
                component: ComponentCreator('/docs/api/Profile/Update Avatar Set', '53c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Confirm 2FA Setting',
                component: ComponentCreator('/docs/api/Registration/Confirm 2FA Setting', '1df'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Disable 2FA',
                component: ComponentCreator('/docs/api/Registration/Disable 2FA', '507'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Forgot Password',
                component: ComponentCreator('/docs/api/Registration/Forgot Password', '74b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Password Reset',
                component: ComponentCreator('/docs/api/Registration/Password Reset', '1fe'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Request 2FA',
                component: ComponentCreator('/docs/api/Registration/Request 2FA', 'e78'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Resend Verification Code',
                component: ComponentCreator('/docs/api/Registration/Resend Verification Code', '7f9'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Sign in',
                component: ComponentCreator('/docs/api/Registration/Sign in', '9f6'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Sign in 2FA Check',
                component: ComponentCreator('/docs/api/Registration/Sign in 2FA Check', '87e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Sign up',
                component: ComponentCreator('/docs/api/Registration/Sign up', '072'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Registration/Verify Account',
                component: ComponentCreator('/docs/api/Registration/Verify Account', '120'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Social Login - OAuth2/Add & Update Social Sites into DB',
                component: ComponentCreator('/docs/api/Social Login - OAuth2/Add & Update Social Sites into DB', '503'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Social Login - OAuth2/OAuth2 Summary',
                component: ComponentCreator('/docs/api/Social Login - OAuth2/OAuth2 Summary', '964'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Social Login - OAuth2/Send Request for Social login',
                component: ComponentCreator('/docs/api/Social Login - OAuth2/Send Request for Social login', '2e7'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Statistics/Get Round Chance',
                component: ComponentCreator('/docs/api/Statistics/Get Round Chance', '35d'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Statistics/Get Round Perform 1',
                component: ComponentCreator('/docs/api/Statistics/Get Round Perform 1', '6e7'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Statistics/Get Round Perform 2',
                component: ComponentCreator('/docs/api/Statistics/Get Round Perform 2', 'd09'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User Tier/Add New Task Setting',
                component: ComponentCreator('/docs/api/User Tier/Add New Task Setting', '8df'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User Tier/Add New Tier',
                component: ComponentCreator('/docs/api/User Tier/Add New Tier', 'd75'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User Tier/Delete User Tier',
                component: ComponentCreator('/docs/api/User Tier/Delete User Tier', 'eb5'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User Tier/Get User Tiers',
                component: ComponentCreator('/docs/api/User Tier/Get User Tiers', '2d5'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User Tier/Update Task Setting',
                component: ComponentCreator('/docs/api/User Tier/Update Task Setting', 'b64'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User Tier/Update User Tier',
                component: ComponentCreator('/docs/api/User Tier/Update User Tier', 'fa1'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User Tier/User Tier Suammary',
                component: ComponentCreator('/docs/api/User Tier/User Tier Suammary', '2a1'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Add Disallowed Country',
                component: ComponentCreator('/docs/api/User/Add Disallowed Country', '9fd'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Change Password by User',
                component: ComponentCreator('/docs/api/User/Change Password by User', '00a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Change Role',
                component: ComponentCreator('/docs/api/User/Change Role', 'fad'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Confirm Email Change',
                component: ComponentCreator('/docs/api/User/Confirm Email Change', '24c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Create New User By Admin',
                component: ComponentCreator('/docs/api/User/Create New User By Admin', 'b9e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Delete Account',
                component: ComponentCreator('/docs/api/User/Delete Account', 'aec'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Get Paginated Users',
                component: ComponentCreator('/docs/api/User/Get Paginated Users', '934'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Get User',
                component: ComponentCreator('/docs/api/User/Get User', '65a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Get User by ID',
                component: ComponentCreator('/docs/api/User/Get User by ID', 'e4d'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Get Users Count',
                component: ComponentCreator('/docs/api/User/Get Users Count', '328'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Make Allow Location',
                component: ComponentCreator('/docs/api/User/Make Allow Location', '137'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Release User by Admin',
                component: ComponentCreator('/docs/api/User/Release User by Admin', 'e3e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Request Email Change',
                component: ComponentCreator('/docs/api/User/Request Email Change', 'c22'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Reset Password By Admin',
                component: ComponentCreator('/docs/api/User/Reset Password By Admin', 'fca'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/Suspend User by Admin',
                component: ComponentCreator('/docs/api/User/Suspend User by Admin', '211'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/User/User Summary',
                component: ComponentCreator('/docs/api/User/User Summary', '091'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Approve Fiat Withdrawal Request',
                component: ComponentCreator('/docs/api/Withdraw/Approve Fiat Withdrawal Request', 'c6d'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Change Withdrawal Request Show Status',
                component: ComponentCreator('/docs/api/Withdraw/Change Withdrawal Request Show Status', '577'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Confirm PayPal Withdrawal Request',
                component: ComponentCreator('/docs/api/Withdraw/Confirm PayPal Withdrawal Request', '023'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Crypto Withdrawal Request',
                component: ComponentCreator('/docs/api/Withdraw/Crypto Withdrawal Request', '868'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Deny Bank Withdrawal Request',
                component: ComponentCreator('/docs/api/Withdraw/Deny Bank Withdrawal Request', '71e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Fiat Withdrawal Request',
                component: ComponentCreator('/docs/api/Withdraw/Fiat Withdrawal Request', 'd14'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Generate Withdraw Code',
                component: ComponentCreator('/docs/api/Withdraw/Generate Withdraw Code', 'cab'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/PayPal Withdraw Request',
                component: ComponentCreator('/docs/api/Withdraw/PayPal Withdraw Request', '8fb'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/Withdraw/Send Withdraw Confirmation Code',
                component: ComponentCreator('/docs/api/Withdraw/Send Withdraw Confirmation Code', '713'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/troubleshoot/Startups/invest-startups',
                component: ComponentCreator('/docs/troubleshoot/Startups/invest-startups', '17b'),
                exact: true,
                sidebar: "troubleshootSidebar"
              },
              {
                path: '/docs/troubleshoot/Startups/investment-risks',
                component: ComponentCreator('/docs/troubleshoot/Startups/investment-risks', '2f2'),
                exact: true,
                sidebar: "troubleshootSidebar"
              },
              {
                path: '/docs/troubleshoot/Startups/minimum-investment',
                component: ComponentCreator('/docs/troubleshoot/Startups/minimum-investment', 'e0e'),
                exact: true,
                sidebar: "troubleshootSidebar"
              },
              {
                path: '/docs/troubleshoot/Startups/track-performance',
                component: ComponentCreator('/docs/troubleshoot/Startups/track-performance', '088'),
                exact: true,
                sidebar: "troubleshootSidebar"
              },
              {
                path: '/docs/troubleshoot/Startups/vetting-startups',
                component: ComponentCreator('/docs/troubleshoot/Startups/vetting-startups', '9e3'),
                exact: true,
                sidebar: "troubleshootSidebar"
              },
              {
                path: '/docs/troubleshoot/Trading/trade-commodities',
                component: ComponentCreator('/docs/troubleshoot/Trading/trade-commodities', '6ed'),
                exact: true,
                sidebar: "troubleshootSidebar"
              },
              {
                path: '/docs/tutorial-basics/auction-launchpad',
                component: ComponentCreator('/docs/tutorial-basics/auction-launchpad', 'cbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/dex',
                component: ComponentCreator('/docs/tutorial-basics/dex', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/earn-rewards',
                component: ComponentCreator('/docs/tutorial-basics/earn-rewards', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/emi',
                component: ComponentCreator('/docs/tutorial-basics/emi', '090'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/invites',
                component: ComponentCreator('/docs/tutorial-basics/invites', 'a54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/loan',
                component: ComponentCreator('/docs/tutorial-basics/loan', '047'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Marketplace/commodity',
                component: ComponentCreator('/docs/tutorial-basics/Marketplace/commodity', '804'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Marketplace/crypto',
                component: ComponentCreator('/docs/tutorial-basics/Marketplace/crypto', '352'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Marketplace/electricity',
                component: ComponentCreator('/docs/tutorial-basics/Marketplace/electricity', '543'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Marketplace/intro',
                component: ComponentCreator('/docs/tutorial-basics/Marketplace/intro', '2e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Marketplace/nft',
                component: ComponentCreator('/docs/tutorial-basics/Marketplace/nft', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Marketplace/real-estate',
                component: ComponentCreator('/docs/tutorial-basics/Marketplace/real-estate', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Marketplace/startup',
                component: ComponentCreator('/docs/tutorial-basics/Marketplace/startup', 'aca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/mobile',
                component: ComponentCreator('/docs/tutorial-basics/mobile', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/node-support',
                component: ComponentCreator('/docs/tutorial-basics/node-support', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/nyyu-price',
                component: ComponentCreator('/docs/tutorial-basics/nyyu-price', '73d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/nyyu-swap',
                component: ComponentCreator('/docs/tutorial-basics/nyyu-swap', '828'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/nyyu-trade',
                component: ComponentCreator('/docs/tutorial-basics/nyyu-trade', 'a3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/nyyu-wallet',
                component: ComponentCreator('/docs/tutorial-basics/nyyu-wallet', 'ea5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/pay',
                component: ComponentCreator('/docs/tutorial-basics/pay', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/proof-of-reserves',
                component: ComponentCreator('/docs/tutorial-basics/proof-of-reserves', '246'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/sale-launchpad',
                component: ComponentCreator('/docs/tutorial-basics/sale-launchpad', 'f06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/save',
                component: ComponentCreator('/docs/tutorial-basics/save', 'e99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/stablecoin',
                component: ComponentCreator('/docs/tutorial-basics/stablecoin', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/uni',
                component: ComponentCreator('/docs/tutorial-basics/uni', 'e1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
