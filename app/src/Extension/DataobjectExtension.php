<?php

namespace App\Extension;

use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;

class DataObjectExtension extends DataExtension
{
    /**
     * Temporarily hide all link and file tracking tabs/fields in the CMS UIs
     *
     * @param FieldList $fields
     */
    public function updateCMSFields(FieldList $fields)
    {
        $fields->removeByName(['FileTracking', 'LinkTracking']);
    }
}
