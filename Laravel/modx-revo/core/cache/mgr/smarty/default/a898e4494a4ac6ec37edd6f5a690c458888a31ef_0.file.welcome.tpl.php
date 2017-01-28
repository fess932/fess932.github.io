<?php /* Smarty version 3.1.27, created on 2017-01-23 23:28:10
         compiled from "/home/vagrant/Code/Laravel/modx-revo/manager/templates/default/welcome.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:14763190095886918a0896e2_70545325%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a898e4494a4ac6ec37edd6f5a690c458888a31ef' => 
    array (
      0 => '/home/vagrant/Code/Laravel/modx-revo/manager/templates/default/welcome.tpl',
      1 => 1483436692,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14763190095886918a0896e2_70545325',
  'variables' => 
  array (
    'dashboard' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5886918a0a8024_99078342',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5886918a0a8024_99078342')) {
function content_5886918a0a8024_99078342 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '14763190095886918a0896e2_70545325';
?>
<div id="modx-panel-welcome-div"></div>

<div id="modx-dashboard" class="dashboard">
<?php echo $_smarty_tpl->tpl_vars['dashboard']->value;?>

</div><?php }
}
?>