<?php

namespace App\Filament\Resources\PopularCityResource\Pages;

use App\Filament\Resources\PopularCityResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPopularCity extends EditRecord
{
    protected static string $resource = PopularCityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
