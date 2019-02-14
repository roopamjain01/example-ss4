<?php

namespace ObsTool\Model;

use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use SilverStripe\ORM\DataObject;
use ObsTool\Model\Chapter;

/**
 * Class Book
 */
class Book extends DataObject implements ScaffoldingProvider
{
    /**
     * @var string
     */
    private static $table_name = 'Book';

    /**
     * @var array
     */
    private static $db = [
        'Title' => 'Varchar(255)',
        'Intro' => 'Text',
        'Tagline' => 'Text',
        'CallToAction' => 'Varchar(255)',
    ];

    /**
     * @var array
     */
    private static $has_many = [
        'Chapters' => Chapter::class
    ];

    /**
     * @var array
     */
    private static $summary_fields = [
        'Title' => 'Title',
        'Tagline' => 'Tagline',
        'Intro' => 'Intro',
    ];

    /**
     * @param SchemaScaffolder $scaffolder The scaffolder
     * @return SchemaScaffolder
     */
    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
    {
        // Provide entity type
        $scaffolder
            ->type(Book::class)
            ->addFields([
                'ID',
                'Title',
                'Tagline',
                'Intro'
            ])
            ->operation(SchemaScaffolder::READ_ONE)
            ->setName('readBookDetails');

        return $scaffolder;
    }

    /**
     *
     * @param Member|null $member Current user who is visiting
     * @return bool
     */
    public function canView($member = null)
    {
        // IllustrationSet information is publicly available
        return true;
    }
}
