<?php

namespace App\Filament\Resources\PopularCityResource\Pages;

use App\Filament\Resources\PopularCityResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPopularCities extends ListRecords
{
    protected static string $resource = PopularCityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
