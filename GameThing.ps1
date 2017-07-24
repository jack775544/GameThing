param(
    [Parameter(Position = 1, Mandatory = $true)]
    [ValidateSet('DevFrontend', 'Build', 'ActivateEnv', 'DeactivateEnv', 'Run')]
    [string]
    $Operation
)

function local:Invoke-Isolated {
    Param(
        [Parameter(Position=0)]
        [scriptblock]
        $ScriptBlock
    )
    & powershell -NoProfile -Command $ScriptBlock.ToString()
}

function local:Build-Project {
    Invoke-Isolated {
        Set-LocationEx frontend
        npm run build
        Remove-Item -Recurse -Force ..\backend\GameThing\frontend-build
        Copy-Item -Recurse -Force .\build\* ..\backend\GameThing\frontend-build
    }
}

function local:Run-FlaskApp {
    Invoke-Isolated {
        & .\backend\.venv\Scripts\Activate.ps1
        Set-LocationEx .\backend\GameThing
        python app.py
    }
}

switch ($Operation) {
    "DevFrontend" {
        Invoke-Isolated {
            Set-Location .\frontend
            npm start
        }
        break;
    }
    "Build" {
        Build-Project
        break;
    }
    "ActivateEnv" {
        & .\backend\.venv\Scripts\Activate.ps1
        break;
    }
    "DeactivateEnv" {
        deactivate
        break;
    }
    'Run' {
        Run-FlaskApp
        break;
    }
    Default {
        Write-Error "No Task Provided"
    }
}