<?php

namespace ObsTool\Model;

use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\OperationResolver;
use SilverStripe\ORM\DataObject;
use ObsTool\Model\Book;
use ObsTool\Model\Topic;
use SilverStripe\Security\Member;

/**
 * Class Unit
 */
class Chapter extends DataObject implements ScaffoldingProvider
{
    /**
     * @var string
     */
    private static $table_name = 'Chapter';

    /**
     * @var array
     */
    private static $db = [
        'Title' => 'Varchar(255)'
    ];

    /**
     * @var array
     */
    private static $has_one = [
        'Book' => Book::class
    ];

    /**
     * @var array
     */
    private static $has_many = [
        'Topics' => Topic::class
    ];

    /**
     * @var array
     */
    private static $summary_fields = [
        'Title' => 'Unit name',
    ];

    /**
     * @param SchemaScaffolder $scaffolder The scaffolder
     * @return SchemaScaffolder
     */
    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
    {
        // Provide entity type
        $scaffolder
            ->type(Chapter::class)
            ->addFields([
                'ID',
                'Title',
                'BookID'
            ])
            ->operation(SchemaScaffolder::READ)
            ->setUsePagination(false)
            ->addArgs([
                'BookID' => 'String'
            ])
            ->setName('readChapters')

            ->setResolver(function($object, array $args, $context, ResolveInfo $info) {
                $list = Chapter::get();
                if (isset($args['BookID'])) {
                    $list = $list->filter('BookID', $args['BookID']);
                }
                return $list;
            })
            ->end();

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
