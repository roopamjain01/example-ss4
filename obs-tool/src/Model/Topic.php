<?php

namespace ObsTool\Model;

use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\ORM\DataObject;
use ObsTool\Model\Chapter;
use SilverStripe\ORM\DB;
use SilverStripe\ORM\FieldType\DBHTMLText;
use SilverStripe\Security\Member;

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
        $scaffolder
            ->type(Topic::class)
            ->addFields([
                'ID',
                'Title',
                'Summary',
                'Description',
                'Chapter'
            ])
            ->operation(SchemaScaffolder::READ)
            ->setUsePagination(false)
            ->addArgs([
                'ChapterID' => 'String'
            ])
            ->setName('readTopics')

            ->setResolver(function($object, array $args, $context, ResolveInfo $info) {
                $list = Topic::get();
                if (isset($args['ChapterID'])) {
                    $ChapterIDs = explode (',', $args['ChapterID']);
                    $list = $list->filter('ChapterID', $ChapterIDs);
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
