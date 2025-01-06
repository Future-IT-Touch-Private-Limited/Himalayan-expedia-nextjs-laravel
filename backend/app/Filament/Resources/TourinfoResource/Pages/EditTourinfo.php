<?php

namespace App\Filament\Resources\TourinfoResource\Pages;

use App\Filament\Resources\TourinfoResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTourinfo extends EditRecord
{
    protected static string $resource = TourinfoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
