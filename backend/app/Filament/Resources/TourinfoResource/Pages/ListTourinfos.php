<?php

namespace App\Filament\Resources\TourinfoResource\Pages;

use App\Filament\Resources\TourinfoResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTourinfos extends ListRecords
{
    protected static string $resource = TourinfoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
