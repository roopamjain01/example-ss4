<?php

namespace {

  use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
  use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
  use SilverStripe\ORM\DataObject;

  /**
   * Class Book
   */
  class FakeBook extends DataObject implements ScaffoldingProvider
  {
      /**
       * @var string
       */
      private static $table_name = 'FakeBook';

      /**
       * @var array
       */
      private static $db = [
          'Title' => 'Varchar(255)',
          'Intro' => 'Text',
      ];

      /**
       * @param SchemaScaffolder $scaffolder The scaffolder
       * @return SchemaScaffolder
       */
      public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
      {
          // Provide entity type
          $scaffolder
              ->type(FakeBook::class)
              ->addFields([
                  'ID',
                  'Title',
                  'Intro'
              ])
              ->operation(SchemaScaffolder::READ)
              ->setName('readFakeBookDetails');

          return $scaffolder;
      }
  }
}
