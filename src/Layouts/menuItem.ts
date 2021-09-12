import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Extra Components',
    icon: { name: 'star-outline' },
    children: [
      {
        title: 'Accordion',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'Actions',
        link: { href: '/extra-components/actions' },
      },
      {
        title: 'Alert',
        link: { href: '/extra-components/alert' },
      },
      {
        title: 'List',
        link: { href: '/extra-components/list' },
      },
      {
        title: 'Spinner',
        link: { href: '/extra-components/spinner' },
      },
      {
        title: 'Progress Bar',
        link: { href: '/extra-components/progress' },
      },
      {
        title: 'Tabs',
        link: { href: '/extra-components/tabs' },
      },
      {
        title: 'Chat',
        link: { href: '/extra-components/chat' },
      },
      {
        title: 'Cards',
        link: { href: '/extra-components/cards' },
      },
      {
        title: 'Flip Card',
        link: { href: '/extra-components/flip-card' },
      },
      {
        title: 'Reveal Card',
        link: { href: '/extra-components/reveal-card' },
      },
    ],
  },

  // Product Add Start
  {
    title: 'Product',
    icon: {name: 'lock-outline' },
    children:[
      {
        title: 'Add Product',
        link: { href: '/product/addproduct'},
      },
      {
        title: 'All Product',
        link: { href: '/product/allProducts'},
      },
      {
        title: 'Edit Product',
        link: {href: '/forms/form-layout'},
      },
    ],
    
  },
  // Product Add End
  
  {
    title: 'Headboard',
    icon: { name: 'edit-2-outline' },
    children: [
      {
        title: 'Add Product',
        link: { href: '/headboard/addproduct' },
      },
      {
        title: 'All Product',
        link: { href: '/headboard/allProduct' },
      },
      {
        title: 'Edit Product',
        link: { href: '/headboard/edit' },
      },
      
    ],
  },
  {
    title: 'Mattressess',
    icon: { name: 'keypad-outline' },
    children: [
      {
        title: 'Add Product',
        link: { href: '/mattressess/addproduct' },
      },
      {
        title: 'All Product',
        link: { href: '/mattressess/allproduct' },
      },
      {
        title: 'Edit Product',
        link: { href: '/mattressess/edit' },
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Popover',
        link: { href: '/modal-overlays/popover' },
      },
      {
        title: 'Tooltip',
        link: { href: '/modal-overlays/tooltip' },
      },
      {
        title: 'Toastr',
        link: { href: '/modal-overlays/toastr' },
      },
    ],
  },
  {
    title: 'Editors',
    icon: { name: 'text-outline' },
    children: [
      {
        title: 'TinyMCE',
        link: { href: '/editors/tinymce' },
      },
      {
        title: 'CKEditor',
        link: { href: '/editors/ckeditor' },
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { href: '/auth/login' },
      },
      {
        title: 'Register',
        link: { href: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { href: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { href: '/auth/reset-password' },
      },
    ],
  },
];

export default items;