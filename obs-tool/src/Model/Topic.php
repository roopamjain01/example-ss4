<?php

namespace ObsTool\Model;

use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use SilverStripe\ORM\DataObject;
use ObsTool\Model\Chapter;
use SilverStripe\ORM\DB;
use SilverStripe\ORM\FieldType\DBHTMLText;

/**
 * Class Topic
 */
class Topic extends DataObject implements ScaffoldingProvider
{
    /**
     * @var string
     */
    private static $table_name = 'Topic';

    /**
     * @var array
     */
    private static $db = [
        'Title' => 'Varchar(255)',
        'Summary' => 'Text',
        'Description' => 'HTMLText'
    ];

    /**
     * @var array
     */
    private static $has_one = [
        'Chapter' => Chapter::class,
    ];

    /**
     * @var array
     */
    private static $summary_fields = [
        'Title' => 'Title',
        'Summary' => 'Summary',
    ];

    /**
     * @param SchemaScaffolder $scaffolder The scaffolder
     * @return SchemaScaffolder
     */
    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
    {
        // Provide entity type
        $bookScaffolder = $scaffolder
            ->type(Book::class)
            ->addFields([
                'ID',
                'Title'
            ])
            ->end();

        return $bookScaffolder;
    }
}
