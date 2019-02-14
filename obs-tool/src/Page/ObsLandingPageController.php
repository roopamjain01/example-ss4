<?php

namespace ObsTool\Page;

use PageController;
use SilverStripe\View\Requirements;
use ObsTool\Model\Book;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Convert;

/**
 * Class ObsLandingPageController
 */
class ObsLandingPageController extends PageController
{
    /**
     * Defines methods that can be called directly
     * @var array
     */
    private static $allowed_actions = [
        'getBookStartPage'
    ];

    public function getBookList ()
    {
        return Book::get();
    }

    public function getBookStartPage (HTTPRequest $id)
    {
        $book = Book::get()->byID($id->params('ID'));
        $this->redirect(Convert::raw2url($book->Title));
    }
}
