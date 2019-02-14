<?php

namespace ObsTool\ModelAdmin;

use ObsTool\Model\Book;
use SilverStripe\Admin\ModelAdmin;

/**
 * Class TestAdmin
 */
class ObsToolAdmin extends ModelAdmin
{
    /**
     * @var string
     */
    private static $url_segment = 'obs';

    /**
     * @var string
     */
    private static $menu_title = 'Online book store';

    /**
     * @var array
     */
    private static $managed_models = [
        Book::class
    ];

  //   public function getEditForm($id = null, $fields = null)
  //   {
  //     $form = parent::getEditForm($id, $fields);
  //
  //     /** @var GridField $gf */
  //     $gf = $form->Fields()->dataFieldByName($this->sanitiseClassName($this->modelClass));
  //
  //
  // 		$gridfieldConfig = $gf->getConfig();
  //
  // 		// remove delete & edit buttons
  //   	$gridfieldConfig
  //         ->getComponentByType('SilverStripe\Forms\GridField\GridFieldAddNewButton')
  //         ->setButtonName('Add Tool');
  //
  // 		return $form;
	// }
}
