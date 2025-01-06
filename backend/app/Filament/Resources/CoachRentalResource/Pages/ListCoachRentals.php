<?php

namespace App\Filament\Resources\CoachRentalResource\Pages;

use App\Filament\Resources\CoachRentalResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCoachRentals extends ListRecords
{
    protected static string $resource = CoachRentalResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
