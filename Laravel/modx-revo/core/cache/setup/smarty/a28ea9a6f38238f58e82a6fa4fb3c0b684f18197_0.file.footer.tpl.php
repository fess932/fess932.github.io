<?php /* Smarty version 3.1.27, created on 2017-01-23 23:27:26
         compiled from "/home/vagrant/Code/Laravel/modx-revo/setup/templates/footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1679536365886915e44b0e0_96891733%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a28ea9a6f38238f58e82a6fa4fb3c0b684f18197' => 
    array (
      0 => '/home/vagrant/Code/Laravel/modx-revo/setup/templates/footer.tpl',
      1 => 1483436692,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1679536365886915e44b0e0_96891733',
  'variables' => 
  array (
    '_lang' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5886915e52dde5_88581236',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5886915e52dde5_88581236')) {
function content_5886915e52dde5_88581236 ($_smarty_tpl) {
if (!is_callable('smarty_modifier_replace')) require_once '/home/vagrant/Code/Laravel/modx-revo/core/model/smarty/plugins/modifier.replace.php';

$_smarty_tpl->properties['nocache_hash'] = '1679536365886915e44b0e0_96891733';
?>
        </div>
        <!-- end content -->
        <div class="clear">&nbsp;</div>
    </div>
</div>

<!-- start footer -->
<div id="footer">
    <div id="footer-inner">
    <div class="container_12">
        <p><?php ob_start();
echo date('Y');
$_tmp1=ob_get_clean();
echo smarty_modifier_replace($_smarty_tpl->tpl_vars['_lang']->value['modx_footer1'],'[[+current_year]]',$_tmp1);?>
</p>
        <p><?php echo $_smarty_tpl->tpl_vars['_lang']->value['modx_footer2'];?>
</p>
    </div>
    </div>
</div>

<div class="post_body">

</div>
<!-- end footer -->
</body>
</html><?php }
}
?>