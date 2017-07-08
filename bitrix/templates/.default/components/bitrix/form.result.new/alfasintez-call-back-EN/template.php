<div class="alfasintez-call-back-form">
	<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>


	<?=$arResult["FORM_NOTE"]?>
	<pre>
		<?print_r($arResult)?>
	</pre>

	<?if ($arResult["isFormNote"] != "Y")
	{
	?>
	<?=$arResult["FORM_HEADER"]?>

	<?
	/***********************************************************
						         form header
	************************************************************/
	?>
		<div class="alfasintez-form-title text-center text-uppercase">
			CALLBACK FORM
		</div>
		<p>
			<?=$arResult["FORM_DESCRIPTION"]?>
		</p>

	<?
	/***********************************************************************************
							                form questions
	***********************************************************************************/
	?>
		<?
		foreach ($arResult["QUESTIONS"] as $FIELD_SID => $arQuestion)
		{
			?>
			<div class="alfasintez-question-<?=$arQuestion["STRUCTURE"]["0"]["ID"]?>">
			<?
			if ($arQuestion['STRUCTURE'][0]['FIELD_TYPE'] == 'hidden')
			{
				echo $arQuestion["HTML_CODE"];
			}
			else
			{
		?>
				<?if (is_array($arResult["FORM_ERRORS"]) && array_key_exists($FIELD_SID, $arResult['FORM_ERRORS'])):?>
					<span class="error-fld" title="<?=$arResult["FORM_ERRORS"][$FIELD_SID]?>"></span>
					<?endif;?>
				
					<?=$arQuestion["IMAGE"]["HTML_CODE"]?></span>
				<?=$arQuestion["HTML_CODE"]?><br>
		<?
			} ?>
			</div>
		<?
		} //endwhile
		?>
		<input <?=(intval($arResult["F_RIGHT"]) < 10 ? "disabled=\"disabled\"" : "");?> type="submit" name="web_form_submit" class="alfasintez-form-submit" value="SEND" />
	<?=$arResult["FORM_FOOTER"]?>
	<? } //endif (isFormNote)?>
</div>
